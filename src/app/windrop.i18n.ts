export type Lang = 'en' | 'ru';

export interface WindropStrings {
  metaTitle: string;
  metaDescription: string;
  brand: string;
  heroTitle: string;
  heroLead: string;
  sectionAbout: string;
  aboutP1: string;
  aboutP2: string;
  sectionFeatures: string;
  feat1: string;
  feat2: string;
  feat3: string;
  feat4: string;
  sectionGetApp: string;
  getAppLead: string;
  downloadWindows: string;
  downloadWindowsHint: string;
  downloadIosCaption: string;
  downloadIosHint: string;
  appStoreBadgeAria: string;
  sectionIosWindowsEyebrow: string;
  sectionIosWindowsTitle: string;
  sectionIosWindowsLead: string;
  iosWinP1: string;
  iosWinP2: string;
  iosWinBulletHeic: string;
  iosWinBulletVideo: string;
  iosWinBulletBundled: string;
  iosMediaImageAlt: string;
  footer: string;
  langLabel: string;
}

export const STRINGS: Record<Lang, WindropStrings> = {
  en: {
    metaTitle: 'WinDrop — share files over Wi‑Fi',
    metaDescription:
      'WinDrop for Windows and iOS: local Wi‑Fi transfer plus built-in HEIC/HEIF and video conversion on Windows. Download the app.',
    brand: 'WinDrop',
    heroTitle: 'Share files over Wi‑Fi.',
    heroLead:
      'Send photos, videos, and documents between your PC and phone on the same network — fast, private, no cloud required.',
    sectionAbout: 'What is WinDrop?',
    aboutP1:
      'WinDrop helps you move files from a Windows PC to a phone, tablet, or another computer at home or at work — over Wi‑Fi, without cables.',
    aboutP2:
      'Install the app on your PC and on your iPhone or iPad, pick what to send, and receive on the other side. Everything stays on your local network.',
    sectionFeatures: 'Highlights',
    feat1: 'Transfers stay on your LAN — not uploaded to the internet',
    feat2: 'Simple flow — choose files and send',
    feat3: 'Images, video, documents, archives — the usual types',
    feat4: 'Native apps for Windows and iOS',
    sectionGetApp: 'Get WinDrop',
    getAppLead: 'Choose your platform.',
    downloadWindows: 'Download for Windows',
    downloadWindowsHint: 'Installer for Windows (64-bit). Set the link in code when your build is ready.',
    downloadIosCaption: 'iPhone and iPad',
    downloadIosHint: 'Test App Store link — replace with your real listing when published.',
    appStoreBadgeAria: 'Download on the App Store',
    sectionIosWindowsEyebrow: 'Windows + iPhone',
    sectionIosWindowsTitle: 'No more “Windows can’t open this file.”',
    sectionIosWindowsLead:
      'iPhone photos and videos often arrive in formats that plain Windows does not handle well. WinDrop closes that gap when you receive files on your PC.',
    iosWinP1:
      'HEIC/HEIF still images and some iOS video containers can fail to preview or open on a typical Windows setup — codecs and extensions are easy to forget.',
    iosWinP2:
      'The Windows app includes a built-in converter: optionally turn HEIC/HEIF into PNG on receive, and transcode video toward H.264/AAC for broad compatibility. FFmpeg is bundled next to the app — no separate codec hunt for basic workflows.',
    iosWinBulletHeic: 'HEIC / HEIF → PNG when receiving (toggle in settings)',
    iosWinBulletVideo: 'Video pipeline toward H.264/AAC for reliable playback on Windows',
    iosWinBulletBundled: 'FFmpeg ships with the Windows build; override path only if you need to',
    iosMediaImageAlt: 'WinDrop settings on Windows: iOS media conversion options',
    footer: '© WinDrop',
    langLabel: 'Language',
  },
  ru: {
    metaTitle: 'WinDrop — обмен файлами по Wi‑Fi',
    metaDescription:
      'WinDrop для Windows и iOS: передача по Wi‑Fi и встроенная конвертация HEIC/HEIF и видео на Windows. Скачайте приложение.',
    brand: 'WinDrop',
    heroTitle: 'Обмен файлами по Wi‑Fi.',
    heroLead:
      'Отправляйте фото, видео и документы между ПК и телефоном в одной сети — быстро, приватно, без облака.',
    sectionAbout: 'Что такое WinDrop?',
    aboutP1:
      'WinDrop помогает передавать файлы с ПК на телефон, планшет или другой компьютер дома или в офисе — по Wi‑Fi, без проводов.',
    aboutP2:
      'Установите приложение на ПК и на iPhone или iPad, выберите файлы и примите их на другой стороне. Всё остаётся в локальной сети.',
    sectionFeatures: 'Возможности',
    feat1: 'Данные остаются в LAN — без загрузки в интернет',
    feat2: 'Простой сценарий — выбрать и отправить',
    feat3: 'Изображения, видео, документы, архивы',
    feat4: 'Нативные приложения для Windows и iOS',
    sectionGetApp: 'Скачать WinDrop',
    getAppLead: 'Выберите платформу.',
    downloadWindows: 'Скачать для Windows',
    downloadWindowsHint:
      'Установщик для Windows (64-bit). Укажите ссылку в коде, когда сборка будет готова.',
    downloadIosCaption: 'iPhone и iPad',
    downloadIosHint: 'Тестовая ссылка App Store — замените на реальную, когда приложение опубликуете.',
    appStoreBadgeAria: 'Загрузить в App Store',
    sectionIosWindowsEyebrow: 'Windows + iPhone',
    sectionIosWindowsTitle: 'Больше не «Windows не может открыть этот файл»',
    sectionIosWindowsLead:
      'Фото и видео с iPhone часто приходят в форматах, с которыми обычный Windows не дружит из коробки. WinDrop убирает эту проблему при приёме на ПК.',
    iosWinP1:
      'Снимки HEIC/HEIF и часть видео с iOS на типичной Windows могут не открываться или без превью — кодеки и расширения из Store легко забыть поставить.',
    iosWinP2:
      'В версии для Windows встроен конвертер: при приёме можно автоматически переводить HEIC/HEIF в PNG и перекодировать видео в сторону H.264/AAC для совместимости. FFmpeg идёт в комплекте рядом с приложением — для базового сценария ничего отдельно не ищем.',
    iosWinBulletHeic: 'HEIC / HEIF → PNG при приёме (переключатель в настройках)',
    iosWinBulletVideo: 'Видео: перекодирование в H.264/AAC для уверенного воспроизведения на Windows',
    iosWinBulletBundled: 'FFmpeg в поставке; свой путь к ffmpeg — только если нужно вручную',
    iosMediaImageAlt: 'Настройки WinDrop на Windows: конвертация медиа с iOS',
    footer: '© WinDrop',
    langLabel: 'Язык',
  },
};
