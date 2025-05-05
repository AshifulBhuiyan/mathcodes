export default {
    title: "Cauchy's Integral Theorem (WIP)",
    description: "A foundational result in complex analysis involving contour integrals.",
    content: `
  <h1>Cauchy's Integral Theorem</h1>
  
  <p>One of the most beautiful results in complex analysis:</p>
  
  <p>If \\( f(z) \\) is analytic on and within a closed curve \\( C \\), then:</p>
  
  \\[
  \\oint_C f(z)\\,dz = 0
  \\]
  
  <p>This means the integral of a holomorphic function around a closed contour is zero.</p>
  
  <h3>Geometric Meaning</h3>
  
  <p>If no singularities lie inside the contour, the integral vanishes.</p>
  
  <h3>Example: \\( f(z) = z^2 \\) around the unit circle</h3>
  
  <p>Let \\( C \\) be the unit circle \\( |z| = 1 \\). Then:</p>
  
  \\[
  \\oint_C z^2\\,dz = 0
  \\]
  
  <p>since \\( z^2 \\) is entire (analytic everywhere).</p>
  `
  };
  