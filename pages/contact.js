export default function Contact() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="mb-4">
        I welcome inquiries for collaborations and job opportunities.
      </p>
      <p>
        <strong>Email:</strong> <a href="mailto:s.abavisani@gatech.edu" className="text-blue-500 underline">s.abavisani@gatech.edu</a>
      </p>
      <div className="mt-4">
        <a 
          href="https://github.com/sajadabvi" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 underline mr-4"
        >
          GitHub
        </a>
        <a 
          href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=tuDtPWgAAAAJ" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 underline"
        >
          Google Scholar
        </a>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Contact Form</h2>
        <form className="mt-4">
          <input type="text" placeholder="Your Name" className="w-full p-2 border rounded mb-4" />
          <input type="email" placeholder="Your Email" className="w-full p-2 border rounded mb-4" />
          <textarea placeholder="Your Message" className="w-full p-2 border rounded mb-4" rows="5"></textarea>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

