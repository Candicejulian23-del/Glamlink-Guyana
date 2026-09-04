// GlamLink Guyana
// Paste your EXISTING Supabase credentials below.
// Use only the publishable key. Never use a secret/service-role key.
const SUPABASE_URL = "PASTE_YOUR_SUPABASE_URL_HERE";
const SUPABASE_PUBLISHABLE_KEY = "PASTE_YOUR_PUBLISHABLE_KEY_HERE";

document.getElementById("search").onclick = () => {
  const q = document.getElementById("q").value.trim();
  alert(q ? `Searching for ${q}` : "Enter a hairstyle or stylist name.");
};
document.getElementById("login").onclick = () => {
  alert("Supabase login will be connected next.");
};