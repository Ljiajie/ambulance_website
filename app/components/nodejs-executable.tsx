// const response = await fetch('https://example.com');
// const html = await response.text();
                
// console.log('Fetched HTML:');
// console.log(html.slice(0, 500) + '...');
// console.log('Converting HTML to Markdown...');

// Make this a module
export {};

// Create an async function to handle the fetching
async function fetchAndProcessHtml() {
  try {
    const response = await fetch('https://example.com');
    const html = await response.text();
                
    console.log('Fetched HTML:');
    console.log(html.slice(0, 500) + '...');
    console.log('Converting HTML to Markdown...');

    // Extract the title and content
    const titleMatch = html.match(/<h1>(.*?)<\/h1>/);
    if (titleMatch) {
      console.log('\nTitle:', titleMatch[1]);
    }

    const contentMatch = html.match(/<p>(.*?)<\/p>/);
    if (contentMatch) {
      console.log('Content:', contentMatch[1]);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Execute the function
fetchAndProcessHtml();