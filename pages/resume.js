export default function Resume() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Resume / CV</h1>
      <a href="/resume.pdf" download className="text-blue-500 underline mb-4 inline-block">
        Download Resume (PDF)
      </a>
      <div>
        <h2 className="text-2xl font-bold mt-4">Education</h2>
        <p>
          <strong>Ph.D. in Electrical and Computer Engineering</strong> – Georgia Institute of Technology (Aug 2020 – Dec 2025) [GPA: 3.9/4]
        </p>
        <p>
          <strong>M.S. in Electrical and Computer Engineering</strong> – Georgia Institute of Technology (Aug 2020 – Aug 2023) [GPA: 3.9/4]
        </p>
        <p>
          <strong>B.S. in Electrical Engineering</strong> – Ferdowsi University of Mashhad (Sep 2014 – Sep 2019) [GPA: 4/4]
        </p>

        <h2 className="text-2xl font-bold mt-4">Research Experience</h2>
        <p>
          <strong>Graduate Research Assistant</strong> – Center for Translational Research in Neuroimaging and Data Science (TReNDS), Georgia Tech (Aug 2020 – Present)
        </p>
        <ul className="list-disc ml-6">
          <li>Advanced algorithmic causal discovery in large-scale dynamic systems (leading to 3 publications).</li>
          <li>Developed scalable methods that improved runtime efficiency by over 1,000x.</li>
          <li>Created the open-source package <em>gunfolds</em> for causal discovery.</li>
        </ul>
        <p>
          <strong>Volunteer Researcher</strong> – Collaboration with Rutgers University (Sep 2018 – Dec 2019)
        </p>
        <p>
          <strong>Undergraduate Research Assistant</strong> – Robotic Prosthetic Control (Dec 2017 – Sep 2019)
        </p>

        <h2 className="text-2xl font-bold mt-4">Technical Skills</h2>
        <ul className="list-disc ml-6">
          <li><strong>Programming:</strong> Python (NetworkX, igraph, NumPy, SciPy, Scikit-learn, PyTorch, TensorFlow, Pandas), C++ (OpenCV, Emgu, AForge), Matlab, JAVA, Clingo, R</li>
          <li><strong>Machine Learning:</strong> LLMs, Transformers, Predictive & Statistical Modeling, Optimization, Git, Tigramite</li>
          <li><strong>Computer Vision & Speech Processing:</strong> GANs, Diffusion Models, Self-Supervised Models, Cross-modal Data Generation, Vision-Language Alignment, Speech-to-Text</li>
          <li><strong>Other:</strong> Algorithm Development, Parallel Computing, Open-Source Contributions, Scalable Solutions</li>
        </ul>
      </div>
    </div>
  )
}

