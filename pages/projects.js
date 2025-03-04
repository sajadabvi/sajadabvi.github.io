import { useState } from "react";

const projects = [
  {
    category: "Research Projects",
    items: [
      {
        title: "GRACE-C: Generalized Rate Agnostic Causal Estimation via Constraints",
        description: (
          <div>
            <p>
              Discover GRACE-C, a breakthrough method that redefines causal discovery in undersampled time series data. By bridging the gap between the true causal timescale and slower measurement rates, GRACE-C uncovers hidden dynamics in complex systems—be it brain networks or economic models.
            </p>
            <p>
              Harnessing advanced constraint programming and cutting‐edge theoretical insights, GRACE-C delivers up to three orders of magnitude speed improvement over previous methods. It scales effortlessly to graphs with over 100 nodes and robustly handles noisy, real-world data.
            </p>
            <p>
              <strong>Key Results:</strong>
            </p>
            <ul className="list-disc ml-6">
              <li>Delivers a dramatic speed boost compared to existing techniques.</li>
              <li>Efficiently processes graphs with 100+ nodes without needing undersampling rates.</li>
              <li>Maintains high accuracy despite statistical noise and potential edge misidentification.</li>
            </ul>
            <p className="mt-2">
              Experience a new era in causal discovery—where innovation meets real-world application.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <img
                  src="/images/gracec1.jpeg"
                  alt="GRACE-C Graph Overview"
                  className="w-full h-auto rounded"
                />
                <p className="text-sm text-center mt-2">Visualizing GRACE-C’s intricate causal graph.</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/images/gracec2.jpeg"
                  alt="Speed Comparison of sRASL vs. RASL"
                  className="w-full h-auto rounded"
                />
                <p className="text-sm text-center mt-2">Speed boost: GRACE-C outperforms traditional methods.</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/images/gracec3.jpeg"
                  alt="Performance Benchmark: SCC Impact on Computation Time"
                  className="w-full h-auto rounded"
                />
                <p className="text-sm text-center mt-2">Figure 5 Benchmark: SCC structure’s impact on computation time.</p>
              </div>
            </div>
            <div className="mt-6 flex flex-col items-center">
              <a 
                href="https://openreview.net/forum?id=B_pCIsX8KL_" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 underline text-lg font-semibold"
              >
                Read Full Paper
              </a>
              <a 
                href="https://github.com/sajadabvi/gunfolds" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 underline text-lg font-semibold mt-2"
              >
                Code
              </a>
            </div>
          </div>
        ),
      },
      {
        title: "Causal Learning through Deliberate Undersampling",
        description: (
          <div>
            <p>
              What if measuring data <strong>less frequently</strong> actually gave you <strong>more information</strong> about causality?
              This paper presents a groundbreaking idea that challenges the common belief that <strong>higher measurement rates are always better</strong>.
              Instead, by strategically <strong>undersampling</strong>, we can reduce ambiguity and gain a sharper understanding of causal relationships!
            </p>
            <p>
              <strong>Key Results:</strong>
            </p>
            <ul className="list-disc ml-6">
              <li>
                <strong>Hidden Insights Unlocked:</strong> Slower measurements can provide <strong>a different perspective on causality</strong>, revealing dependencies that are otherwise obscured.
              </li>
              <li>
                <strong>Reduced Equivalence Classes:</strong> By including undersampled data, we significantly <strong>reduce the number of possible causal graphs</strong>, making structure learning more precise.
              </li>
              <li>
                <strong>Non-Monotonic Effects:</strong> Counterintuitively, adding a <strong>slower dataset</strong> can sometimes <strong>increase accuracy more than adding a faster dataset!</strong>
              </li>
            </ul>
            <p className="mt-2">
              Below, the images illustrate how undersampling affects equivalence classes and quantifies the measurable gains achieved through this method.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <img
                  src="/images/clearr_figure2.jpeg"
                  alt="Equivalence Class Reduction via Undersampling"
                  className="w-full h-auto rounded"
                />
                <p className="text-center mt-2 italic">
                  Venn diagrams showing how undersampling affects equivalence class relationships, revealing hidden causal structures.
                </p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <img
                  src="/images/clearr_figure3.jpeg"
                  alt="Histogram Showing Graph Properties"
                  className="w-full h-auto rounded"
                />
                <p className="text-center mt-2 italic">
                  Density estimation showing how graph structures change with different undersampling rates.
                </p>
              </div>
              <div>
                <img
                  src="/images/clearr_figure4.jpeg"
                  alt="Histogram Quantifying Undersampling Gain"
                  className="w-full h-auto rounded"
                />
                <p className="text-center mt-2 italic">
                  Histogram quantifying the gain from undersampling, measuring improvement in causal structure identification.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-col items-center">
              <a 
                href="https://proceedings.mlr.press/v213/solovyeva23a.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 underline text-lg font-semibold"
              >
                Read Full Paper
              </a>
              <a 
                href="https://github.com/sajadabvi/gunfolds" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 underline text-lg font-semibold mt-2"
              >
                Code
              </a>
            </div>
          </div>
        )
      },
      {
        title: "Greedy AutoAugment",
        description: (
          <div>
            <p>
              Greedy AutoAugment redefines image data augmentation by employing a highly efficient greedy search strategy to discover optimal augmentation policies. Instead of exhaustively exploring an exponentially expanding search space, the algorithm leverages a greedy approach that reduces the number of trials to a manageable linear growth. This dynamic method efficiently selects and combines augmentation operations to boost the performance of neural networks on image classification tasks.
            </p>
            <p>
              By integrating a breadth-first search for policy exploration with targeted policy evaluation, Greedy AutoAugment dramatically cuts down on computational requirements—achieving comparable or higher accuracies on challenging datasets such as Tiny ImageNet, CIFAR-10, CIFAR-100, and SVHN while using up to 360 times fewer computational resources.
            </p>
            <div className="mt-4 flex flex-col items-center">
              <img 
                src="/images/autoaugment_fig2.jpeg" 
                alt="Fig. 2. The general scheme of AutoAugment algorithm." 
                className="w-full h-auto rounded"
              />
              <p className="text-center mt-2 italic">
                Fig. 2. The general scheme of AutoAugment algorithm.
              </p>
            </div>
            <div className="mt-6 flex flex-col items-center">
              <a 
                href="https://www.sciencedirect.com/science/article/pii/S0167865520303305" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 underline text-lg font-semibold"
              >
                Read Full Paper
              </a>
              <a 
                href="https://github.com/sajadabvi/greedy_auto_augment" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 underline text-lg font-semibold mt-2"
              >
                Code
              </a>
            </div>
          </div>
        ),
      },
      {
        title: "Radiologist-Level COVID-19 Detection Using CT Scans with Detail-Oriented Capsule Networks",
        description: (
          <div>
            <p>
              Experience a breakthrough in automated COVID-19 diagnosis with the DECAPS architecture—a novel, detail-oriented capsule network designed to emulate the nuanced diagnostic process of expert radiologists. DECAPS combines the robust capabilities of capsule networks with innovative techniques such as Inverted Dynamic Routing and the Peekaboo training strategy to focus on critical regions within CT scans.
            </p>
            <p>
              By selectively amplifying signals from regions of interest and incorporating both coarse and fine-grained feature representations, DECAPS achieves superior accuracy and sensitivity even with limited training data. The integration of conditional GAN-based data augmentation further bolsters its performance, enabling the system to outperform traditional methods and even experienced radiologists in key diagnostic metrics.
            </p>
            <div className="mt-4 flex flex-col items-center">
              <img
                src="/images/decaps_fig1.jpeg"
                alt="Figure 1: (a): Illustration of the DECAPS architecture. Sample head activation maps (HAMs) are presented for the COVID-19 class. (b): Peekaboo training. HAMs are randomly selected to perform patch crop/drop while training. At test time, the average HAM across all heads is used to perform patch crop (with no patch drop required at test time) to obtain the fine-grained prediction. (c): The distillation process to fine-tune the coarse-grained prediction (pcoarse) using the fine-grained prediction (pfine) to obtain the final distilled predictions (pdist.)."
                className="w-full h-auto rounded"
              />
              <p className="text-center mt-2 italic">
                Figure 1: (a): Illustration of the DECAPS architecture with sample head activation maps for COVID-19. (b): Peekaboo training with patch crop/drop. (c): Distillation process for refining predictions.
              </p>
            </div>
            <div className="mt-6 flex flex-col items-center">
              <a
                href="https://arxiv.org/abs/2004.07407"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-lg font-semibold"
              >
                Read Full Paper
              </a>
              <a
                href="https://github.com/amobiny/DECAPS_for_COVID19"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-lg font-semibold mt-2"
              >
                Code
              </a>
            </div>
          </div>
        ),
      },
      {
        title: "Piecing Together the Causal Puzzle",
        description: (
          <div>
            <p>
              "Piecing Together the Causal Puzzle" confronts one of neuroimaging’s toughest challenges—recovering the true causal structure from undersampled, noisy time series data. When fMRI sampling intervals lag behind the millisecond-level neural interactions, traditional methods yield multiple plausible causal graphs. This work innovates by leveraging Answer Set Programming (ASP) to rigorously explore and prune the space of potential causal graphs.
            </p>
            <p>
              By incorporating domain-specific constraints and an advanced optimization framework, the method doesn’t settle on a single “best” graph; instead, it produces an entire equivalence class of candidate solutions. This rich solution set enables experts to manually inspect and select the most plausible causal model, effectively piecing together the underlying causal puzzle from incomplete data.
            </p>
            <p>
              Furthermore, the approach demonstrates robust performance on simulated fMRI data, accurately preserving the BOLD signal across varying undersampling rates. This ensures that even when data are sampled sparsely, critical neural interactions remain intact—a breakthrough for causal inference in neuroimaging.
            </p>
            <div className="mt-4">
              <div className="flex flex-col items-center">
                <img
                  src="/images/causal_puzzle_fig1.jpeg"
                  alt="Figure 1: Top left(A): Size of optimization solution set across different undersamplings, repeated 100 times. Bottom right(B): Commission error of the solution vs. optimization cost for that solution. Solutions in one equivalent class are highlighted in red."
                  className="w-full h-auto rounded"
                />
                <p className="text-center mt-2 italic">
                  Figure 1: Top left (A) shows the size of the optimization solution set across different undersamplings (repeated 100 times), while bottom right (B) depicts the commission error versus optimization cost, with solutions in one equivalent class highlighted in red.
                </p>
              </div>
              <div className="flex flex-col items-center mt-6">
                <img
                  src="/images/causal_puzzle_fig5.jpeg"
                  alt="Figure 5: Impact of different undersampling rates (1s, 2s, 3s) on BOLD signal preservation in fMRI data simulated with the balloon model. Minimal error is observed with 1-second undersampling, whereas larger intervals degrade accuracy in all methods that don’t account for undersampling effect. Our method RnR accounts for this effect and does not suffer loss from undersampling."
                  className="w-full h-auto rounded"
                />
                <p className="text-center mt-2 italic">
                  Figure 5: Impact of different undersampling rates (1s, 2s, 3s) on BOLD signal preservation in fMRI data simulated with the balloon model. Minimal error is observed with 1-second undersampling, whereas larger intervals degrade accuracy in methods that ignore undersampling effects. Our method, RnR, overcomes this limitation.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-col items-center">
              <a
                href="/papers/Highway_to_Causality__Rock_n__RASL_Tunes_Up_Noisy_Data_with_Answer_Set_Programming.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-lg font-semibold"
              >
                Read Full Paper
              </a>
              <a
                href="https://github.com/sajadabvi/gunfolds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-lg font-semibold mt-2"
              >
                Code
              </a>
            </div>
          </div>
        ),
      },
      {
        title: "ION-C: Integration of Overlapping Networks via Constraints",
        description: (
          <div>
            <p>
              ION-C offers a powerful and efficient solution to one of causal inference’s most challenging puzzles—integrating information from multiple datasets that share only a subset of variables. By formulating the problem using Answer Set Programming (ASP), ION-C skillfully merges local causal graphs derived from overlapping datasets into a complete, globally consistent causal model.
            </p>
            <p>
              This innovative approach not only enumerates all possible ground-truth directed acyclic graphs (DAGs) that respect the independence relations present in the input graphs but also significantly reduces computational complexity compared to earlier methods. The resulting solution set provides experts with a rich palette of candidate models, enabling more informed decisions about underlying causal structures.
            </p>
            <p>
              ION-C’s versatility makes it ideal for applications ranging from social survey analysis to complex biomedical data, where variables are often measured across disjoint datasets. The method’s ability to pinpoint commonalities and reconcile differences among overlapping networks sets a new standard in causal graph recovery.
            </p>
            <div className="mt-4 flex flex-col items-center">
              <img
                src="/images/ionc_fig4.jpeg"
                alt="Figure 4: Representation of ION solution set."
                className="w-full h-auto rounded"
              />
              <p className="text-center mt-2 italic">
                Figure 4: Representation of ION solution set.
              </p>
            </div>
            <div className="mt-6 flex flex-col items-center">
              <a 
                href="https://arxiv.org/abs/2411.04243" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 underline text-lg font-semibold"
              >
                Read Full Paper
              </a>
              <a 
                href="https://github.com/neuroneural/gunfolds" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 underline text-lg font-semibold mt-2"
              >
                Code
              </a>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    category: "Technical Projects",
    items: [
      {
        title: "Large Language Models & Knowledge Graphs",
        description: (
          <div>
            <p>
              Worked on integrating Llama 3 with knowledge graphs to improve logical reasoning and problem-solving in AI models.
            </p>
            <div className="mt-6 flex flex-col items-center">
              <a 
                href="https://example.com/fullpaper-llama-kg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 underline text-lg font-semibold"
              >
                Read Full Paper
              </a>
              <a 
                href="https://github.com/username/llama-kg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 underline text-lg font-semibold mt-2"
              >
                Code
              </a>
            </div>
          </div>
        ),
      },
      {
        title: "Generative Adversarial Networks (GANs) for Self-Driving Cars",
        description: (
          <div>
            <p>
              Trained GANs to augment and improve the classification of street signs under diverse weather conditions using multimodal inputs (image & text).
            </p>
            <div className="mt-6 flex flex-col items-center">
              <a 
                href="https://example.com/fullpaper-gan-selfdriving" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 underline text-lg font-semibold"
              >
                Read Full Paper
              </a>
              <a 
                href="https://github.com/username/gan-selfdriving" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 underline text-lg font-semibold mt-2"
              >
                Code
              </a>
            </div>
          </div>
        ),
      },
      {
        title: "Topology-Aware Self-Supervised Learning",
        description: (
          <div>
            <p>
              Developed a contrastive learning framework with a topology loss term to reduce texture bias in CNNs, improving generalization in vision tasks.
            </p>
            <div className="mt-6 flex flex-col items-center">
              <a 
                href="https://example.com/fullpaper-topology-ssl" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 underline text-lg font-semibold"
              >
                Read Full Paper
              </a>
              <a 
                href="https://github.com/username/topology-ssl" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 underline text-lg font-semibold mt-2"
              >
                Code
              </a>
            </div>
          </div>
        ),
      },
      {
        title: "Dynamical System Prediction with Neural Networks",
        description: (
          <div>
            <p>
              Built neural networks (PhICNet) to predict physical systems governed by PDEs, integrating multimodal physics and image data for enhanced spatio-temporal forecasting.
            </p>
            <div className="mt-6 flex flex-col items-center">
              <a 
                href="https://example.com/fullpaper-dynamic-prediction" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 underline text-lg font-semibold"
              >
                Read Full Paper
              </a>
              <a 
                href="https://github.com/username/dynamic-prediction" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 underline text-lg font-semibold mt-2"
              >
                Code
              </a>
            </div>
          </div>
        ),
      },
      {
        title: "Eye Gaze Tracking Device",
        description: (
          <div>
            <p>
              Designed an eye-tracking device from scratch using C#.NET, OpenCV, Emgu, and AForge libraries. Achieved high-accuracy gaze detection for real-time applications.
            </p>
            <div className="mt-6 flex flex-col items-center">
              <a 
                href="https://example.com/fullpaper-eye-gaze" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 underline text-lg font-semibold"
              >
                Read Full Paper
              </a>
              <a 
                href="https://github.com/username/eye-gaze-tracking" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 underline text-lg font-semibold mt-2"
              >
                Code
              </a>
            </div>
          </div>
        ),
      },
    ],
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Projects & Portfolio</h1>
      <p className="mb-4">
        Click on a project to view more details.
      </p>

      {projects.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6">
          <h2 className="text-2xl font-bold mb-2">{section.category}</h2>
          <div className="space-y-4">
            {section.items.map((project, projectIndex) => {
              const projectId = `${sectionIndex}-${projectIndex}`;
              return (
                <div
                  key={projectId}
                  className="border p-4 rounded-lg shadow-md bg-white"
                >
                  <button
                    className="w-full text-left font-semibold text-lg flex justify-between items-center"
                    onClick={() => toggleExpand(projectId)}
                  >
                    {project.title}
                    <span>{expanded === projectId ? "▲" : "▼"}</span>
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-auto ${
                      expanded === projectId
                        ? "max-h-[2000px] mt-2 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="mt-2">{project.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
