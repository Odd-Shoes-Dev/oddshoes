# Resend Email Setup for Odd Shoes

Your forms are now connected to Resend! Follow these steps to start receiving submissions.

## Setup Steps (5 minutes)

### 1. Create Resend Account
1. Go to [resend.com](https://resend.com)
2. Sign up with your email (free account - 3,000 emails/month)
3. Verify your email address

### 2. Get Your API Key
1. Go to [API Keys](https://resend.com/api-keys)
2. Click **Create API Key**
3. Name it: `Odd Shoes Production`
4. Copy the key (starts with `re_...`)

### 3. Add API Key to Your Project
Open `.env.local` file and replace the placeholder:
```env
RESEND_API_KEY=re_YourActualKeyFromStep2
```

### 4. Domain Setup (Optional but Recommended)

**Option A: Use Test Domain (Quick Start)**
- Resend provides `onboarding@resend.dev` 
- Emails will come from this temporary domain
- Works immediately, no setup needed

**Option B: Use Your Own Domain (Professional)**
1. Go to [Domains](https://resend.com/domains) in Resend
2. Click **Add Domain**
3. Enter: `oddshoes.co`
4. Add DNS records to your domain registrar:
   - SPF record
   - DKIM record  
   - MX record (if receiving emails)
5. Verify domain (may take 24 hours)

Once verified, update the API routes:
- Change `planner@oddshoes.co` → your verified domain
- Change `contact@oddshoes.co` → your verified domain

### 5. Restart Development Server
```bash
npm run dev
```

### 6. Test It!
1. Go to `http://localhost:3000/planner`
2. Fill out the form
3. Submit
4. Check your email at `buildit@oddshoes.dev`

## What Happens Now

**Project Planner:**
- Form submissions at `/planner` → Email to `buildit@oddshoes.dev`
- Beautiful HTML email with all project details
- Services, budget, timeline, description included

**Contact Form:**
- Form submissions at `/contact` → Email to `buildit@oddshoes.dev`
- Clean email with contact info and message

## Email Templates Include:
- ✅ Professional Odd Shoes branding
- ✅ Coral accent colors (#e05a3a)
- ✅ All form data formatted nicely
- ✅ Direct mailto: and tel: links
- ✅ Submission source (which page)

## Troubleshooting

**"Failed to send" error:**
- Check if `RESEND_API_KEY` is set in `.env.local`
- Make sure you restarted dev server after adding key
- Verify API key is valid at resend.com/api-keys

**Not receiving emails:**
- Check spam folder
- Verify domain is set up correctly
- Test with a different email address
- Check Resend dashboard for delivery logs

## Free Tier Limits
- 3,000 emails/month
- 100 emails/day
- Perfect for startup phase!

## Need Help?
- [Resend Documentation](https://resend.com/docs)
- [Resend Discord Community](https://discord.gg/resend)

---

**Everything is already configured!** Just add your API key and you're live. 🚀
