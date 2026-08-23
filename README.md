# Aditya Suruse — React Portfolio with Real Email Sending

This version uses **EmailJS** so the contact form can send a real email without opening the visitor's email application.

## 1. Install
```bash
npm install
```

## 2. Create EmailJS account
Go to EmailJS and:
1. Create an account.
2. Add an Email Service and connect your Gmail.
3. Create an Email Template.
4. Copy your Service ID, Template ID and Public Key.

## 3. Configure `.env`
Copy `.env.example` to `.env` and replace:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 4. Template variables
Create these variables in your EmailJS template:
- `to_email`
- `from_name`
- `from_email`
- `subject`
- `message`
- `reply_to`

Set the recipient/to email to `{{to_email}}`.

## 5. Run
```bash
npm run dev
```

## 6. Build for deployment
```bash
npm run build
```

Important: restart Vite after changing `.env`.

The portfolio also includes a browser-only profile photo upload. For a permanent deployed photo, place your photo in `public/profile.jpg` and update the React image source.


## Responsive
Optimized for desktop, laptop, tablet, Android/iPhone, small phones, and landscape phones.
