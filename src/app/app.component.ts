import { Component, computed, effect, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Lang, STRINGS, WindropStrings } from './windrop.i18n';

const LANG_KEY = 'windrop-lang';

/** Replace with your real Windows installer URL. */
const DOWNLOAD_WINDOWS_URL = '#download-windows';

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

  readonly lang = signal<Lang>(this.readStoredLang());

  readonly t = computed<WindropStrings>(() => STRINGS[this.lang()]);

  constructor() {
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
  readonly appStoreBadgeSrc = '/app-store-badge.svg';

  /** Settings screenshot; replace file in public/ or set to '' to hide. */
  readonly iosMediaPreviewSrc = '/windrop-ios-media-settings.png';
}
