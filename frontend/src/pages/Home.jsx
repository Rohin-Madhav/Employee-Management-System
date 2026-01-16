import React from "react";
import { Users, Target, Award, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Welcome to Employee Management System
            </h1>
            <p className="text-xl text-emerald-100 mb-8">
              Streamline your workforce management with our modern, intuitive
              platform
            </p>
            <Link
              to={"/manage"}
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We are committed to providing the best employee management
              solutions. Our platform helps organizations manage their workforce
              efficiently and effectively.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg">
              <Users className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Employee Management
              </h3>
              <p className="text-gray-600">
                Easily manage employee information, profiles, and organizational
                structure.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg">
              <Target className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Performance Tracking
              </h3>
              <p className="text-gray-600">
                Monitor and track employee performance metrics and goals
                effectively.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg">
              <Award className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Recognition
              </h3>
              <p className="text-gray-600">
                Recognize and reward your top performers to boost morale and
                productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <Briefcase className="w-8 h-8 text-emerald-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Easy Employee Onboarding
                </h3>
                <p className="text-gray-600">
                  Streamlined onboarding process to get new employees up and
                  running quickly.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Briefcase className="w-8 h-8 text-emerald-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Leave Management
                </h3>
                <p className="text-gray-600">
                  Manage leave requests and attendance tracking in one place.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Briefcase className="w-8 h-8 text-emerald-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Real-time Analytics
                </h3>
                <p className="text-gray-600">
                  Get insights into your workforce with comprehensive analytics
                  and reports.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Briefcase className="w-8 h-8 text-emerald-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Secure & Reliable
                </h3>
                <p className="text-gray-600">
                  Enterprise-grade security to protect sensitive employee
                  information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your HR Management?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join hundreds of companies using our platform
          </p>
          <Link
            to={"/manage"}
            className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Start Free Trial
          </Link>
        </div>
      </section>

      <div className="h-32"></div>
    </div>
  );
};

export default Home;
