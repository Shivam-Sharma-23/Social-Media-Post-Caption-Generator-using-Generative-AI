document.getElementById('aiForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const platform = document.getElementById('platform').value;
  const tone = document.getElementById('tone').value;
  const content = document.getElementById('content').value;
  const generateImage = document.getElementById('generateImage').checked;

  const loading = document.getElementById('loading');
  const output = document.getElementById('output');
  const resultText = document.getElementById('resultText');
  const generatedImage = document.getElementById('generatedImage');

  // Show loading
  loading.style.display = 'block';
  output.style.display = 'none';
  resultText.textContent = '';
  generatedImage.style.display = 'none';

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Simulated caption output
  const caption = `🌟 Platform: ${platform}
💬 Tone: ${tone}
📝 Idea: ${content}
✒️ Here's your AI-generated caption: 

"Introducing something exciting! Stay tuned... #${platform.toLowerCase()} #${tone.toLowerCase()} #aiGenerated"`;

  resultText.textContent = caption;

  // If image generation is checked, show image
  if (generateImage) {
    const prompt = encodeURIComponent(content || tone || platform);
    const imageUrl = `https://image.pollinations.ai/prompt/${prompt}`;

    generatedImage.src = imageUrl;
    generatedImage.style.display = 'block';
  }

  // Show output
  loading.style.display = 'none';
  output.style.display = 'block';
});