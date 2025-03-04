export default function Testimonials() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Testimonials & Recommendations</h1>
      <blockquote className="border-l-4 border-blue-500 pl-4 italic">
        "Mohammadsajad is an outstanding researcher with exceptional problem-solving skills and dedication." 
        <span className="block mt-2">- Professor John Doe, Georgia Tech</span>
      </blockquote>
      <blockquote className="border-l-4 border-blue-500 pl-4 italic mt-4">
        "A brilliant mind in causal inference and machine learning. His scalable solutions are truly innovative."
        <span className="block mt-2">- Colleague Jane Smith, Industry Expert</span>
      </blockquote>
      <div className="mt-6">
        <a 
          href="https://linkedin.com/in/yourprofile" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 underline"
        >
          More Recommendations on LinkedIn
        </a>
      </div>
    </div>
  )
}

