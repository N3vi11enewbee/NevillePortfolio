import Layout from '../layout';

export default function ProjectsPage() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <p>UPLOAD - https://github.com/N3vi11enewbee/upload					                           
      - Developed a FastAPI backend server in Python to support file uploads, process user input, and interact with the OpenAI API for data analysis.
      - Implemented a user interface using Next.js to facilitate CSV-related queries and display results.

         SUMMARIZER -  https://github.com/N3vi11enewbee/SUMMARIZER					                           
      - Developed an application that allows users to upload documents for processing by the OpenAI API to analyze content and extract key points.
      - Streamlined document review by automating the summarization and key point extraction process.
      - Enabled users to quickly grasp essential information through the automated analysis and summarization features.
      
          PERSONAL WEBSITE - https://neville-portfolio-seven.vercel.app/		                           
      - Developed a dynamic web application using the Next.js framework to showcase my projects and provide information about me.
      - Created a personal portfolio that allows visitors to explore my work and learn about my skills and experience.
      - Ensured the site is fully responsive, optimized for performance, and seamlessly deployed on Vercel for fast load times and a smooth user experience.
</p>
    </Layout>
  );
}
