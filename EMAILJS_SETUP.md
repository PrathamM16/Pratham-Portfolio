# 📧 EmailJS Setup Guide - Contact Form Integration

## Overview
Your contact form is now integrated with EmailJS to send emails directly to `pratham.m1605@gmail.com` when visitors submit the form.

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's FREE - 200 emails/month)
3. Sign up with your Google account or email

---

### Step 2: Add Email Service
1. After logging in, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** (recommended)
4. Click **"Connect Account"**
5. Allow EmailJS to access your Gmail
6. **Copy your Service ID** (looks like: `service_xxxxxxx`)

---

### Step 3: Create Email Template
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template:

**Template Name:** `portfolio_contact`

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**Content:**
```
Hello Pratham,

You have received a new message from your portfolio website!

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent via your portfolio contact form.
Reply directly to: {{from_email}}
```

4. Click **"Save"**
5. **Copy your Template ID** (looks like: `template_xxxxxxx`)

---

### Step 4: Get Public Key
1. Go to **"Account"** → **"General"**
2. Find **"Public Key"** section
3. **Copy your Public Key** (looks like: `xxxxxxxxxxxxxxxxxx`)

---

### Step 5: Update Your Portfolio Code

Open `src/components/Contact/Contact.jsx` and replace these lines:

```javascript
const serviceID = 'YOUR_SERVICE_ID' // Replace with your actual Service ID
const templateID = 'YOUR_TEMPLATE_ID' // Replace with your actual Template ID
const publicKey = 'YOUR_PUBLIC_KEY' // Replace with your actual Public Key
```

**With your actual credentials:**

```javascript
const serviceID = 'service_xxxxxxx' // Your copied Service ID
const templateID = 'template_xxxxxxx' // Your copied Template ID
const publicKey = 'xxxxxxxxxxxxxxxxxx' // Your copied Public Key
```

---

## ✅ Test Your Contact Form

1. Save the file
2. Go to your portfolio: `http://localhost:5173`
3. Scroll to the Contact section
4. Fill out the form with test data
5. Click "Send Message"
6. Check your email inbox: `pratham.m1605@gmail.com`

---

## 🎯 Expected Behavior

**When someone fills the form:**
1. ✅ Form data is sent to EmailJS
2. ✅ EmailJS forwards it to your Gmail
3. ✅ User sees success message with confetti 🎉
4. ✅ Form resets automatically
5. ✅ You receive email with sender's details

---

## 🔧 Troubleshooting

### "Failed to send message" error?
- ✅ Check if Service ID, Template ID, and Public Key are correct
- ✅ Make sure EmailJS service is connected to Gmail
- ✅ Verify template is saved and active
- ✅ Check browser console for specific errors

### Not receiving emails?
- ✅ Check spam/junk folder
- ✅ Verify Gmail account connected to EmailJS
- ✅ Make sure template includes `{{to_email}}` or hardcode your email
- ✅ Check EmailJS dashboard for delivery logs

### Rate limit reached?
- Free plan: 200 emails/month
- Upgrade to paid plan if needed
- Or add backup method (direct mailto link)

---

## 🎨 Alternative: Using Web3Forms (Simpler)

If EmailJS seems complex, you can use **Web3Forms** (even simpler):

1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Enter your email: `pratham.m1605@gmail.com`
3. Get your Access Key
4. Update Contact.jsx with their simple API

**Example:**
```javascript
const response = await fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    access_key: 'YOUR_ACCESS_KEY',
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  }),
})
```

---

## 📱 Testing Checklist

- [ ] Service ID configured
- [ ] Template ID configured
- [ ] Public Key configured
- [ ] Test form submission works
- [ ] Receive email in inbox
- [ ] Success message shows
- [ ] Confetti animation plays
- [ ] Form resets after submission
- [ ] Error handling works

---

## 💡 Pro Tips

1. **Auto-Reply**: Create a second template to auto-reply to form submitters
2. **Spam Protection**: Add reCAPTCHA (EmailJS supports it)
3. **Backup**: Add direct `mailto:` link as fallback
4. **Analytics**: Track form submissions in EmailJS dashboard

---

## 🆘 Need Help?

- EmailJS Docs: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Available in dashboard
- Web3Forms: [https://docs.web3forms.com/](https://docs.web3forms.com/)

---

**Made with ❤️ by Pratham M**

Once configured, your contact form will be fully functional! 🚀
