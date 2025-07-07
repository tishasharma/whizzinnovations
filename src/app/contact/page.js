'use client'

function ContactUsPage() {
  function sendMessage(e){
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const responseElement = document.getElementById('response');

    formData.append("data[TIMESTAMP]", new Date().toISOString());

    if (responseElement) {
      responseElement.textContent = 'Sending message...';
      responseElement.className = 'text-sm mt-2 text-blue-600';
    }

    fetch(form.action, {
        method: "POST",
        body: formData,
    })
    .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log('Success:', data);
        if (responseElement) {
          responseElement.textContent = 'Thank you! Your message has been sent.';
          responseElement.className = 'text-sm mt-2 text-green-600';
          setTimeout(() => {
            responseElement.textContent = '';
            responseElement.className = 'text-sm mt-2';
          }, 5000);
        }
        form.reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        if (responseElement) {
          responseElement.textContent = 'Sorry, there was an error sending your message. Please try again.';
          responseElement.className = 'text-sm mt-2 text-red-600';
          setTimeout(() => {
            responseElement.textContent = '';
            responseElement.className = 'text-sm mt-2';
          }, 5000);
        }
    });
  }  

  return (
    <section id="contact" className="bg-gray-50 text-purple-900 py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
        <form action="https://sheetdb.io/api/v1/dl02fu9pqrnl0" method="post" onSubmit={sendMessage} id="contact-form" className="space-y-4">
            <input type="text" name="data[NAME]" id="name" placeholder="Name" required className="w-full px-4 py-2 border border-purple-300 rounded-lg" />
            <input type="email" name="data[EMAIL]" id="email" placeholder="Email" required className="w-full px-4 py-2 border border-purple-300 rounded-lg" />
            <textarea name="data[MESSAGE]" id="message" placeholder="Message" required className="w-full px-4 py-2 border border-purple-300 rounded-lg"></textarea>
            <button type="submit" className="bg-purple-900 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">Send Message</button>
            <p id="response" className="text-sm mt-2"></p>
        </form>
        </div>
    </section>
  )
}

export default ContactUsPage