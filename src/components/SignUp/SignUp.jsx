import React, { useState, useEffect, useRef } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    university: '',
    studentId: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const canvasRef = useRef(null);

  // Same neural background (reuse)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const nodes = [];
    const nodeCount = 12;
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(147, 51, 234, 0.5)';
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((res) => setTimeout(res, 1500));
    setIsLoading(false);
    console.log('Signup submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4 relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950/10 to-gray-950" />

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/8 backdrop-blur-2xl border border-white/20 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              UniLyfe
            </h1>
            <p className="text-gray-400 text-sm">Join the ultimate student community</p>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="firstName" placeholder="First Name" onChange={handleInputChange} value={formData.firstName} required className="w-full px-4 py-3.5 bg-white/5 border border-white/20 rounded-xl text-white" />
              <input type="text" name="lastName" placeholder="Last Name" onChange={handleInputChange} value={formData.lastName} required className="w-full px-4 py-3.5 bg-white/5 border border-white/20 rounded-xl text-white" />
            </div>
            <select name="university" onChange={handleInputChange} value={formData.university} required className="w-full px-4 py-3.5 bg-white/5 border border-white/20 rounded-xl text-white">
              <option value="">Select your university</option>
              <option value="harvard">Harvard University</option>
              <option value="mit">MIT</option>
              <option value="stanford">Stanford University</option>
            </select>
            <input type="text" name="studentId" placeholder="Student ID" onChange={handleInputChange} value={formData.studentId} required className="w-full px-4 py-3.5 bg-white/5 border border-white/20 rounded-xl text-white" />
            <input type="email" name="email" placeholder="Email" onChange={handleInputChange} value={formData.email} required className="w-full px-4 py-3.5 bg-white/5 border border-white/20 rounded-xl text-white" />
            <div className="grid grid-cols-2 gap-4">
              <input type="password" name="password" placeholder="Password" onChange={handleInputChange} value={formData.password} required className="w-full px-4 py-3.5 bg-white/5 border border-white/20 rounded-xl text-white" />
              <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleInputChange} value={formData.confirmPassword} required className="w-full px-4 py-3.5 bg-white/5 border border-white/20 rounded-xl text-white" />
            </div>
            <button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl">
              {isLoading ? 'Processing...' : 'Create Account'}
            </button>
          </form>
          <p className="text-xs text-gray-400 text-center mt-4">
            By creating an account, you agree to our <span className="text-purple-400">Terms</span> and <span className="text-purple-400">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
