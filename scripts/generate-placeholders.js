const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const images = [
  { name: 'always-available.jpg', color: '#D4AF37', text: '24/7 Availability' },
  { name: 'reduce-staffing.jpg', color: '#F59E0B', text: 'Team Efficiency' },
  { name: 'consistent-quality.jpg', color: '#F97316', text: 'Consistent Quality' },
  { name: 'analytics.jpg', color: '#A855F7', text: 'Real-Time Analytics' },
  { name: 'hospitality.jpg', color: '#D4AF37', text: 'Hospitality' },
  { name: 'healthcare.jpg', color: '#F59E0B', text: 'Healthcare' },
  { name: 'restaurant.jpg', color: '#EA580C', text: 'Restaurants' },
  { name: 'retail.jpg', color: '#A855F7', text: 'Retail' },
  { name: 'professional.jpg', color: '#6366F1', text: 'Professional Services' },
  { name: 'support.jpg', color: '#10B981', text: 'Customer Support' },
  { name: 'business.jpg', color: '#4B5563', text: 'Any Business' },
];

async function generatePlaceholder(name, color, text) {
  const width = 1200;
  const height = 800;

  const svg = `
    <svg width="${width}" height="${height}">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color};stop-opacity:0.9" />
          <stop offset="100%" style="stop-color:${color};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad)"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="64" fill="white" text-anchor="middle" dominant-baseline="middle" font-weight="bold" opacity="0.9">${text}</text>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90 })
    .toFile(path.join(imagesDir, name));

  console.log(`Generated ${name}`);
}

async function generateAll() {
  console.log('Generating placeholder images...');
  for (const img of images) {
    await generatePlaceholder(img.name, img.color, img.text);
  }
  console.log('All placeholder images generated successfully!');
}

generateAll().catch(console.error);
