export default function Blog() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <div>
        <article className="mb-6">
          <h2 className="text-2xl font-bold">Lessons from My PhD Journey</h2>
          <p className="mt-2">
            Reflections on challenges and breakthroughs in causal inference and deep learning.
          </p>
          <a href="#" className="text-blue-500 underline">Read More</a>
        </article>
        <article className="mb-6">
          <h2 className="text-2xl font-bold">Innovations in Time Series Analysis</h2>
          <p className="mt-2">
            How advanced statistical techniques are transforming noisy, real-world data.
          </p>
          <a href="#" className="text-blue-500 underline">Read More</a>
        </article>
      </div>
    </div>
  )
}

