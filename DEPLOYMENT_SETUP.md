# 🚀 Deployment Setup Guide - ethan.tel

## 📋 Pregled projekta

**Domena:** ethan.tel  
**Email za primanje:** sales@vanadium.solutions  
**Email servis:** Resend  
**Hosting:** Vercel  

---

## 🔍 Trenutno stanje projekta

### ✅ Šta je spremno:
- Next.js 14 aplikacija sa App Router
- Multi-language support (EN, DE, SK, NO, AR)
- RTL podrška za arapski
- Sve komponente i UI
- Responsive dizajn (desktop + mobile)
- Framer Motion animacije

### ❌ Šta nedostaje:
1. **Email funkcionalnost** - DemoForm trenutno samo prikazuje alert, ne šalje emailove
2. **Resend integracija** - nema instaliranog Resend paketa
3. **API ruta** - nema `/app/api/send-email/route.ts`
4. **Environment varijable** - nema `.env.local` fajla
5. **Vercel konfiguracija** - nema `vercel.json`

---

## 📦 Šta treba instalirati

### 1. Resend paket
```bash
npm install resend
```

### 2. Dodati u `package.json` dependencies:
```json
"resend": "^3.0.0"
```

---

## 🔧 Implementacija Email funkcionalnosti

### 1. Kreirati API rutu: `/app/api/send-email/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { companyName, industry, callVolume, country, goals, language } = body

    // Validacija
    if (!companyName || !industry || !callVolume) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Slanje emaila
    const { data, error } = await resend.emails.send({
      from: 'Ethan Demo <demo@ethan.tel>',
      to: ['sales@vanadium.solutions'],
      subject: `New Demo Request from ${companyName}`,
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Call Volume:</strong> ${callVolume}</p>
        <p><strong>Country/Languages:</strong> ${country || 'Not specified'}</p>
        <p><strong>Goals:</strong> ${goals || 'Not specified'}</p>
        <p><strong>Form Language:</strong> ${language || 'en'}</p>
        <hr>
        <p><small>Submitted from ethan.tel</small></p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

### 2. Update DemoForm komponente: `/components/DemoForm.tsx`

Promeniti `handleSubmit` funkciju:

```typescript
const [isSubmitting, setIsSubmitting] = useState(false)

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        language: language, // iz LanguageContext
      }),
    })

    if (response.ok) {
      alert(t.demo.successMessage)
      // Reset form
      setFormData({
        companyName: '',
        industry: '',
        country: '',
        callVolume: '',
        goals: '',
      })
    } else {
      alert('Failed to send request. Please try again.')
    }
  } catch (error) {
    console.error('Error:', error)
    alert('An error occurred. Please try again.')
  } finally {
    setIsSubmitting(false)
  }
}
```

---

## 🔐 Environment Varijable

### 1. Kreirati `.env.local` fajl u root direktorijumu:

```env
# Resend API Key
RESEND_API_KEY=re_your_api_key_here
```

### 2. Dodati u `.gitignore` (ako već nije):

```
.env*.local
```

### 3. Kako dobiti Resend API Key:

1. Idi na https://resend.com
2. Registruj se / Login
3. Idi na **API Keys** sekciju
4. Klikni **Create API Key**
5. Kopiraj key i stavi u `.env.local`

### 4. Verifikuj domenu u Resend:

**VAŽNO:** Pre nego što možeš slati emailove sa `demo@ethan.tel`, moraš verifikovati domenu:

1. U Resend dashboard idi na **Domains**
2. Klikni **Add Domain**
3. Unesi `ethan.tel`
4. Resend će ti dati DNS records (SPF, DKIM, DMARC)
5. Dodaj te records u name.com DNS settings
6. Sačekaj verifikaciju (može trajati do 48h, obično brže)

**Dok domena nije verifikovana**, možeš koristiti:
```typescript
from: 'onboarding@resend.dev'
```

---

## 🌐 Vercel Deployment

### 1. Priprema projekta

Kreirati `vercel.json` u root direktorijumu:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["fra1"]
}
```

### 2. Deployment opcije

#### Opcija A: Vercel CLI (brže)

```bash
# Instaliraj Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Production deploy
vercel --prod
```

#### Opcija B: GitHub Integration (preporučeno za continuous deployment)

1. Push kod na GitHub
2. Idi na https://vercel.com
3. Klikni **Add New Project**
4. Import GitHub repository
5. Vercel će automatski detektovati Next.js
6. Dodaj Environment Variables (RESEND_API_KEY)
7. Klikni **Deploy**

### 3. Dodavanje Environment Variables u Vercel

1. U Vercel dashboard, idi na **Settings** → **Environment Variables**
2. Dodaj:
   - **Key:** `RESEND_API_KEY`
   - **Value:** tvoj Resend API key
   - **Environments:** Production, Preview, Development (sve tri)
3. Klikni **Save**

### 4. Custom Domain Setup (ethan.tel)

#### U Vercel:
1. Idi na **Settings** → **Domains**
2. Klikni **Add Domain**
3. Unesi `ethan.tel`
4. Vercel će ti dati DNS instrukcije

#### U name.com:
1. Login na name.com
2. Idi na **My Domains** → **ethan.tel** → **DNS Records**
3. Dodaj Vercel DNS records:

**Opcija 1: A Record (preporučeno)**
```
Type: A
Host: @
Answer: 76.76.21.21
TTL: 300
```

**Opcija 2: CNAME Record**
```
Type: CNAME
Host: @
Answer: cname.vercel-dns.com
TTL: 300
```

**Za www subdomain:**
```
Type: CNAME
Host: www
Answer: cname.vercel-dns.com
TTL: 300
```

4. Sačekaj DNS propagaciju (može trajati 24-48h, obično 1-2h)
5. Vercel će automatski generisati SSL certifikat

---

## ✅ Checklist pre deploya

- [ ] Instaliran `resend` paket
- [ ] Kreirana API ruta `/app/api/send-email/route.ts`
- [ ] Updateovan `DemoForm.tsx` sa fetch logikom
- [ ] Kreiran `.env.local` sa `RESEND_API_KEY`
- [ ] `.env.local` dodat u `.gitignore`
- [ ] Testiran email lokalno (`npm run dev`)
- [ ] Kod push-ovan na GitHub (ako koristiš GitHub integration)
- [ ] Vercel projekat kreiran
- [ ] Environment varijable dodane u Vercel
- [ ] Domena `ethan.tel` dodata u Vercel
- [ ] DNS records dodati u name.com
- [ ] Domena verifikovana u Resend (za slanje sa `demo@ethan.tel`)

---

## 🧪 Testiranje

### Lokalno testiranje:

```bash
# Pokreni dev server
npm run dev

# Otvori http://localhost:3000
# Popuni DemoForm i submit
# Proveri konzolu za greške
# Proveri email na sales@vanadium.solutions
```

### Production testiranje:

1. Poseti https://ethan.tel
2. Popuni DemoForm
3. Submit
4. Proveri email na sales@vanadium.solutions

---

## 🐛 Troubleshooting

### Email se ne šalje:

1. **Proveri Resend API Key:**
   - Je li key validan?
   - Je li dodat u Vercel environment variables?

2. **Proveri domenu:**
   - Je li `ethan.tel` verifikovana u Resend?
   - Ako ne, koristi `onboarding@resend.dev` privremeno

3. **Proveri API rutu:**
   - Otvori browser console
   - Proveri Network tab za `/api/send-email` request
   - Proveri response status i error poruke

4. **Proveri Vercel logs:**
   - Idi na Vercel dashboard → **Deployments** → klikni na deployment → **Functions** tab
   - Proveri logs za greške

### Domena ne radi:

1. **Proveri DNS:**
   ```bash
   # U terminalu
   nslookup ethan.tel
   ```
   Trebalo bi da vidiš Vercel IP adresu

2. **Proveri Vercel domain status:**
   - U Vercel dashboard → **Domains**
   - Status treba biti "Valid"

3. **Sačekaj DNS propagaciju:**
   - Može trajati do 48h
   - Koristi https://dnschecker.org da proveriš

---

## 📞 Support

Ako imaš problema:
- Vercel Support: https://vercel.com/support
- Resend Support: https://resend.com/support
- name.com Support: https://www.name.com/support

---

## 🎉 Gotovo!

Nakon što sve ovo uradiš, tvoja aplikacija će biti live na **ethan.tel** i DemoForm će slati emailove na **sales@vanadium.solutions**!
