# SElab-HW1 — گزارش آزمایش فرانت‌اند ایستا

## معرفی پروژه

این مخزن حاصل کار تیمی برای آزمایشگاه مهندسی نرم‌افزار است. یک **فرانت‌اند ایستا** با **React** (Create React App) پیاده‌سازی شده که به‌صورت یک **صفحهٔ پورتفولیو** شامل بخش‌های Header، Hero، Projects، Skills، Contact و Footer است.

- **مخزن GitHub:** [https://github.com/mahyar176/SElab-HW1](https://github.com/mahyar176/SElab-HW1)
- **استقرار خودکار:** GitHub Actions → GitHub Pages
- **آدرس سایت (GitHub Pages):** [https://mahyar176.github.io/SElab-HW1/](https://mahyar176.github.io/SElab-HW1/)

> در workflow استقرار، دامنهٔ سفارشی `selab-hw1.com` نیز در فایل deploy تنظیم شده است؛ در صورت فعال‌سازی DNS، سایت از همان آدرس نیز در دسترس خواهد بود.

---

## جزئیات پیاده‌سازی

### تکنولوژی‌ها

| مورد | انتخاب |
|------|--------|
| فریم‌ورک | React 18 |
| ابزار ساخت | react-scripts (CRA) |
| کنترل نسخه | Git + GitHub |
| CI/CD | GitHub Actions (workflow در `.github/workflows/deploy.yml`) |
| میزبانی | GitHub Pages |

### فایل `.gitignore`

پوشه‌های `node_modules/`، خروجی build، فایل‌های محیطی `.env` و سایر فایل‌های موقت/وابسته به IDE در `.gitignore` نادیده گرفته می‌شوند تا فقط کد منبع و تنظیمات پروژه در مخزن ذخیره شود.

### شاخه‌ها (Branches)

حداقل سه شاخهٔ معنادار در فرآیند توسعه استفاده شده است:

| شاخه | هدف | مسئولیت تقریبی |
|------|-----|----------------|
| `main` | شاخهٔ پایدار و قابل استقرار؛ فقط از طریق Pull Request به‌روز می‌شود | ادغام نهایی تیم |
| `feature/hamidReza-header-hero` | پیاده‌سازی Header، Hero، Skills، Footer و استایل‌های مرتبط | HamidReza |
| `feature/mahyar-projects-contact` | پیاده‌سازی Projects، Contact و استایل‌های مرتبط | Mahyar |

**جریان کار (Workflow):**

1. ایجاد مخزن و `Initial commit` روی `main`
2. ایجاد شاخه‌های feature از `main` و توسعهٔ موازی توسط اعضای تیم
3. باز کردن **Pull Request** از `feature/hamidReza-header-hero` به `main` و ادغام پس از بررسی (PR #1)
4. ادغام `main` در شاخهٔ `feature/mahyar-projects-contact` برای همگام‌سازی قبل از PR دوم
5. ادغام نهایی تغییرات Projects/Contact به `main` از طریق Pull Request

### محافظت از شاخهٔ `main`

در تنظیمات مخزن GitHub (Settings → Branches → Branch protection rules):

- ادغام مستقیم push به `main` غیرفعال است
- ادغام فقط از طریق **Pull Request** مجاز است
- در صورت نیاز، تأیید review یا status checkهای CI نیز فعال شده‌اند

### تعارض‌ها (Conflicts) و رفع آن‌ها

حداقل **دو تعارض** در ادغام شاخه‌ها رخ داده و به‌صورت دستی برطرف شده است:

| # | محل تعارض | علت | نحوهٔ حل |
|---|-----------|-----|----------|
| 1 | `src/App.css` | همزمان در شاخهٔ HamidReza (`style(App): smooth scrolling...`) و شاخهٔ Mahyar (`style(App): scrolling and scrollbar`) استایل سراسری App تغییر کرده بود | هنگام **Merge PR #1**، هر دو تغییر (اسکرول نرم + استایل scrollbar) در یک نسخهٔ واحد ادغام شد |
| 2 | `src/App.js` / `.gitignore` | پس از merge اول، شاخهٔ Mahyar با `main` قدیمی‌تر بود؛ هنگام `Merge branch 'main' into feature/mahyar-projects-contact` تعارض در ساختار importها و قوانین gitignore ایجاد شد | `main` ابتدا در feature merge شد؛ conflict markers حذف و نسخهٔ نهایی شامل تمام کامپوننت‌ها (Header تا Contact) شد |

### کامیت‌های معنادار

در مجموع **۲۰ commit** (شامل merge commitها) در تاریخچهٔ مخزن ثبت شده است. جدول زیر commitهای اصلی (بدون تکرار merge) را نشان می‌دهد:

| Hash | پیام commit | توضیح |
|------|-------------|--------|
| `fa77031` | Initial commit | ایجاد مخزن و ساختار اولیه |
| `3dea20f` | feat(Header): responsive menu toggle | منوی موبایل با state |
| `a766b3b` | style(Header): mobile menu styling | استایل hamburger و responsive |
| `805cbbf` | feat(Hero): smooth scroll + dual CTA | دکمه‌های CTA و اسکرول |
| `f481556` | style(Hero): animations | انیمیشن و بهبود UI |
| `b2ea5c0` | feat(Skills): tabbed interface | تب‌بندی مهارت‌ها |
| `31f5cbf` | style(Skills): tabs and badges | استایل بخش Skills |
| `d148d4a` | feat(Footer): links and social | فوتر چندستونه |
| `b5449ab` | style(Footer): multi-column layout | طراحی فوتر |
| `7bd282a` | style(App): smooth scrolling + scrollbar | استایل global (شاخه HamidReza) |
| `95a7794` | chore: project configuration | package.json، entry files، workflow |
| `00b623a` | feat(Projects): interactive section | بخش پروژه‌ها |
| `bf46743` | style(Projects): cards and modal | کارت و مودال |
| `020b753` | feat(Contact): contact form | فرم تماس |
| `c9d6622` | style(Contact): layout redesign | چیدمان Contact |
| `972f60b` | fix: Update gitignore | اصلاح gitignore |
| `4180faf` | style(App): scrolling and scrollbar | استایل global (شاخه Mahyar) |
| `8187bac` | Merge PR #1 (header-hero → main) | ادغام اولین feature |
| `6e53f72` | Merge main → mahyar feature | همگام‌سازی قبل از PR دوم |
| `d8fbdd6` | Merge origin/main | ادغام نهایی روی main |

### استقرار خودکار (GitHub Actions)

فایل `.github/workflows/deploy.yml` در هر push به `main`:

1. کد را checkout می‌کند
2. Node.js 18 نصب و `npm ci` اجرا می‌کند
3. `npm run build` می‌سازد
4. خروجی پوشهٔ `build/` را با `peaceiris/actions-gh-pages` روی شاخهٔ `gh-pages` منتشر می‌کند

برای مشاهدهٔ وضعیت build: تب **Actions** در مخزن GitHub.

### اجرای محلی

```bash
git clone https://github.com/mahyar176/SElab-HW1.git
cd SElab-HW1
npm install
npm start      # توسعه روی http://localhost:3000
npm run build  # ساخت نسخه production
```

---

## پرسش‌ها

### ۱. پوشهٔ `.git` چیست؟ چه اطلاعاتی در آن ذخیره می‌شود؟ با چه دستوری ساخته می‌شود؟

پوشهٔ **`.git`** مخزن محلی Git است و تمام تاریخچه و متادیتای پروژه را نگه می‌دارد، از جمله:

- **objects:** commitها، treeها، blobها (محتوای فایل‌ها)
- **refs:** اشاره‌گر به شاخه‌ها و tagها (`refs/heads/`, `refs/tags/`)
- **HEAD:** شاخه یا commit فعلی
- **index:** staging area (فایل‌های آماده commit)
- **config:** تنظیمات محلی مخزن
- **logs:** تاریخچهٔ جابه‌جایی HEAD

با دستور **`git init`** در یک پوشهٔ خالی ساخته می‌شود. با **`git clone <url>`** نیز نسخهٔ کامل `.git` از remote کپی می‌شود.

---

### ۲. منظور از atomic بودن در atomic commit و atomic pull-request چیست؟

**Atomic** یعنی یک واحد غیرقابل تقسیم:

- **Atomic commit:** هر commit فقط **یک تغییر منطقی** را ثبت کند (مثلاً فقط «اضافه کردن Header»، نه Header + Footer + refactor همزمان). اگر commit را revert کنید، یک قابلیت مشخص برگردد، نه نصف پروژه.
- **Atomic pull request:** هر PR یک **هدف واحد** داشته باشد (یک feature یا یک باگ‌فیکس). review، test و merge ساده‌تر می‌شود و تاریخچهٔ `main` خوانا می‌ماند.

در این پروژه، commitهایی مثل `feat(Header): ...` و `style(Header): ...` جداگانه نوشته شده‌اند تا هر commit معنا و مرز مشخصی داشته باشد.

---

### ۳. تفاوت `fetch`، `pull`، `merge`، `rebase` و `cherry-pick`

| دستور | کار اصلی |
|--------|----------|
| **fetch** | commitها و شاخه‌های remote را **دانلود** می‌کند اما روی شاخهٔ محلی فعلی **ادغام نمی‌کند** (`git fetch origin`) |
| **pull** | معادل `fetch` + ادغام در شاخهٔ فعلی است (`git pull` ≈ `git fetch` + `merge` یا `rebase`) |
| **merge** | تاریخچهٔ دو شاخه را با **commit ادغام** (merge commit) یا fast-forward ترکیب می‌کند؛ تاریخچهٔ واقعی حفظ می‌شود |
| **rebase** | commitهای شاخه را روی tip شاخهٔ دیگر **بازنویسی** می‌کند؛ تاریخچه خطی‌تر می‌شود اما hashها عوض می‌شوند |
| **cherry-pick** | **یک commit مشخص** از شاخهٔ دیگر را روی شاخهٔ فعلی اعمال می‌کند، بدون merge کل شاخه |

در این پروژه عمدتاً از **merge** (از طریق PR) استفاده شده است.

---

### ۴. تفاوت `reset`، `revert`، `restore`، `switch` و `checkout`

| دستور | کار |
|--------|-----|
| **reset** | اشاره‌گر شاخه (و اختیاری staging/working tree) را به commit قدیمی‌تر می‌برد؛ `--soft` / `--mixed` / `--hard` رفتار متفاوت دارد |
| **revert** | یک commit جدید می‌سازد که **معکوس** تغییرات commit هدف است؛ تاریخچه عمومی را خراب نمی‌کند (مناسب `main`) |
| **restore** | فایل‌های working tree یا staging را از commit یا index بازیابی می‌کند (`git restore <file>`) |
| **switch** | بین **شاخه‌ها** جابه‌جا می‌شود (`git switch feature/x`) |
| **checkout** | قدیمی‌تر؛ هم switch شاخه، هم بازیابی فایل از commit؛ `switch`/`restore` جایگزینهای مدرن‌تر هستند |

---

### ۵. stage (index) چیست؟ `stash` چه کاری می‌کند؟

**Stage (Index):** ناحیهٔ میانی بین working directory و repository. با `git add` فایل‌ها به stage می‌روند؛ `git commit` فقط آنچه در stage است را ثبت می‌کند. `git status` تفاوت unstaged / staged را نشان می‌دهد.

**stash:** تغییرات commitنشده (modified و staged) را موقتاً در پشته ذخیره می‌کند تا working tree تمیز شود (`git stash`). بعداً با `git stash pop` یا `apply` می‌توان برگرداند — مفید هنگام تعویض شاخه بدون commit نیمه‌کاره.

---

### ۶. مفهوم snapshot چیست؟ ارتباط آن با commit

**Snapshot** در Git یعنی **ثبت لحظه‌ای کامل وضعیت پروژه** (در عمل: snapshot از tree فایل‌ها)، نه فقط diff خط به خط.

هر **commit** یک snapshot ثابت است که به tree اشاره می‌کند؛ parent commitها زنجیرهٔ تاریخچه را می‌سازند. Git برای کارایی objectهای تکراری را share می‌کند، اما مفهوم commit همچنان «عکس» از یک نقطه در زمان است.

مرجع: [Git Basics - Snapshots](https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F#_snapshots_not_differences)

---

### ۷. تفاوت local repository و remote repository

| | Local Repository | Remote Repository |
|---|------------------|-------------------|
| محل | روی دستگاه توسعه‌دهنده (پوشه `.git`) | سرور (مثلاً GitHub) |
| دسترسی | آفلاین، سریع | نیاز به شبکه |
| عملیات | commit، branch، merge محلی | `push` / `fetch` / `pull` |
| همکاری | پایهٔ کار شخصی | نقطهٔ مشترک تیم (`origin`) |

`git remote add origin <url>` ارتباط local را به remote وصل می‌کند؛ `git push` commitهای local را به remote می‌فرستد و `git fetch` برعکس.

---

## اعضای تیم

| نام | نقش در پروژه |
|-----|----------------|
| Mahyar | Projects، Contact، مدیریت مخزن و merge |
| HamidReza | Header، Hero، Skills، Footer |

---

## ساختار پروژه (خلاصه)

```
SElab-HW1/
├── .github/workflows/deploy.yml
├── public/
├── src/
│   ├── components/   # Header, Hero, Projects, Skills, Contact, Footer
│   ├── styles/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```
