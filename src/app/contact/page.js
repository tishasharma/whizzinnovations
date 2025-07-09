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
      responseElement.className = 'text-lg mt-2 text-blue-600';
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
          responseElement.textContent = 'Thank you! Your message has been sent.✅';
          responseElement.className = 'text-lg mt-2 text-green-600';
          setTimeout(() => {
            responseElement.textContent = '';
            responseElement.className = 'text-lg mt-2';
          }, 5000);
        }
        form.reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        if (responseElement) {
          responseElement.textContent = 'Sorry, there was an error sending your message. Please try again.❌';
          responseElement.className = 'text-lg mt-2 text-red-600';
          setTimeout(() => {
            responseElement.textContent = '';
            responseElement.className = 'text-lg mt-2';
          }, 5000);
        }
    });
  }  

  return (
    <>
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

      {/* Office Information Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-purple-900 mb-4">Get in Touch</h3>
            <p className="text-gray-600 text-lg">Visit us, call us, or send us an email. We're here to help!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Office Address */}
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-purple-900 mb-3">Office Address</h4>
              {/* <h5 className="text-[18px] font-semibold text-purple-900">Head Office :</h5> */}
              <p className="text-gray-600 leading-relaxed">
                <span className="font-medium">Head Office:</span><br />
                15-C, Fruit Garden, NH-5,<br/>
                Faridabad - 121001 (Hr.)
              </p>
              {/* <h5 className="text-[18px] font-semibold text-purple-900">Corporate Office:</h5> */}
              <p className="text-gray-600 leading-relaxed">
                <span className="font-medium">Corporate Office:</span><br />
                B-120, Sector -41, Noida,<br/>
                Uttar Pradesh-201301
              </p>
            </div>

            {/* Email */}
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-purple-900 mb-3">Email Us</h4>
              <div className="text-gray-600 space-y-2">
                <p>
                  <span className="font-medium">General:</span><br />
                  <a href="mailto:info@whizzdream.com" className="text-purple-900 hover:text-blue-900 transition-colors">info@whizzdreambig.com</a>
                </p>
              </div>
            </div>

            {/* Phone Number */}
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-purple-900 mb-3">Call Us</h4>
              <div className="text-gray-600 space-y-2">
                <p>
                  <span className="font-medium">Main Office:</span><br />
                  <a href="tel:+1234567890" className="text-purple-900 hover:text-blue-900 transition-colors text-lg font-medium">+91 7011286545</a>
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Mon - Fri: 9:00 AM - 6:00 PM<br />
                  Sat: 10:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUsPage