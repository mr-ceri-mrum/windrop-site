import { Component, computed, DestroyRef, effect, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Lang, STRINGS, WindropStrings } from './windrop.i18n';

const LANG_KEY = 'windrop-lang';

const DOWNLOAD_WINDOWS_URL =
  'https://github.com/mr-ceri-mrum/localsend/releases/download/1.17.3/Windrop-Setup-1.17.3.exe';

/**
 * Test App Store URL — replace with your real listing, e.g.
 * https://apps.apple.com/app/your-app/id1234567890
 */
const APP_STORE_URL = 'https://apps.apple.com/us/app/windrop/id6470000000';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private copyFeedbackClearTimer: ReturnType<typeof setTimeout> | undefined;

  readonly lang = signal<Lang>(this.readStoredLang());
  readonly isWindowsModalOpen = signal(false);
  readonly copiedPlatform = signal<'windows' | 'ios' | null>(null);

  readonly t = computed<WindropStrings>(() => STRINGS[this.lang()]);

  constructor() {
    this.destroyRef.onDestroy(() => {
      if (this.copyFeedbackClearTimer !== undefined) {
        clearTimeout(this.copyFeedbackClearTimer);
      }
    });

    effect(() => {
      const l = this.lang();
      try {
        localStorage.setItem(LANG_KEY, l);
      } catch {
        /* ignore */
      }
      const strings = STRINGS[l];
      this.document.documentElement.lang = l === 'ru' ? 'ru' : 'en';
      this.document.title = strings.metaTitle;
      this.updateMetaDescription(strings.metaDescription);
    });
  }

  setLang(next: Lang): void {
    this.lang.set(next);
  }

  onDownloadWindowsClick(event: MouseEvent): void {
    event.preventDefault();
    this.startWindowsDownload();
    this.isWindowsModalOpen.set(true);
  }

  closeWindowsModal(): void {
    this.isWindowsModalOpen.set(false);
  }

  copyPlatformLink(which: 'windows' | 'ios'): void {
    const url = which === 'windows' ? DOWNLOAD_WINDOWS_URL : APP_STORE_URL;
    void navigator.clipboard.writeText(url).then(
      () => {
        this.copiedPlatform.set(which);
        if (this.copyFeedbackClearTimer !== undefined) {
          clearTimeout(this.copyFeedbackClearTimer);
        }
        this.copyFeedbackClearTimer = setTimeout(() => {
          this.copiedPlatform.set(null);
          this.copyFeedbackClearTimer = undefined;
        }, 2200);
      },
      () => {
        /* clipboard unavailable */
      },
    );
  }

  private readStoredLang(): Lang {
    try {
      const s = localStorage.getItem(LANG_KEY);
      if (s === 'en' || s === 'ru') return s;
    } catch {
      /* ignore */
    }
    const nav = typeof navigator !== 'undefined' ? navigator.language.toLowerCase() : '';
    return nav.startsWith('ru') ? 'ru' : 'en';
  }

  private updateMetaDescription(content: string): void {
    let el = this.document.querySelector('meta[name="description"]');
    if (!el) {
      el = this.document.createElement('meta');
      el.setAttribute('name', 'description');
      this.document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  }

  readonly downloadWindowsUrl = DOWNLOAD_WINDOWS_URL;
  readonly appStoreUrl = APP_STORE_URL;
  readonly appStoreBadgeSrc = 'app-store-badge.svg';
  readonly windowsWarningStep1Src = 'smartscreen-step-1.png';
  readonly windowsWarningStep2Src = 'smartscreen-step-2.png';

  /** Settings screenshot; replace file in public/ or set to '' to hide. */
  readonly iosMediaPreviewSrc = 'windrop-ios-media-settings.png';

  private startWindowsDownload(): void {
    const frame = this.document.createElement('iframe');
    frame.style.display = 'none';
    frame.setAttribute('aria-hidden', 'true');
    frame.src = DOWNLOAD_WINDOWS_URL;
    this.document.body.appendChild(frame);

    // Keep it long enough for the request to start, then clean up.
    setTimeout(() => {
      if (frame.parentNode) {
        frame.parentNode.removeChild(frame);
      }
    }, 60000);
  }
}
