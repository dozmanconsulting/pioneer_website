import React from 'react';

const Solutions = () => {
  const features = [
    {
      title: 'Intelligent Resource Management',
      description: 'AI-driven optimization of cloud resources for maximum efficiency',
      icon: '🤖'
    },
    {
      title: 'Cost Control',
      description: 'Automated resource scaling based on actual usage patterns',
      icon: '💰'
    },
    {
      title: 'Real-time Analytics',
      description: 'Actionable insights for better decision-making',
      icon: '📊'
    },
    {
      title: 'SRE Automation',
      description: 'Proactive incident detection and automated resolution',
      icon: '⚡'
    }
  ];

  const sections = [
    {
      title: 'Compute Services',
      resources: [
        {
          name: 'Amazon EC2 (Instances)',
          optimization: 'Identifies underutilized instances, auto scaling, and rightsizing lower costs. Schedules non-essential workloads to run during off-peak hours.',
          remediation: 'Detects instance failures, restarts automatically, and reallocates workloads to healthy instances.'
        },
        {
          name: 'Amazon ECS (Containers)',
          optimization: 'Optimizes resource allocation for containers, dynamically adjusts task scaling to reduce over-provisioning.',
          remediation: 'Auto-restarts failed tasks, reallocate workloads across clusters, and optimize container runtime settings.'
        },
        {
          name: 'Amazon EKS (Kubernetes)',
          optimization: 'Adjusts node scaling based on real-time workloads, optimizes pod scheduling to reduce costs.',
          remediation: 'Detects failing nodes and reassigns workloads to healthy nodes, automatically reboots failed pods.'
        },
        {
          name: 'AWS Lambda',
          optimization: 'Identifies inefficient Lambda function invocations, reduces execution time and memory allocation to lower costs.',
          remediation: 'Reschedules failed executions, provide fault-tolerant execution with retry strategies.'
        }
      ]
    },
    {
      title: 'Storage & Database Services',
      resources: [
        {
          name: 'Amazon S3',
          optimization: 'Moves infrequently accessed data to lower-cost storage tiers (Glacier, S3 IA). Removes unused objects to free up storage.',
          remediation: 'Automatically restores mistakenly deleted objects if critical operations are affected.'
        },
        {
          name: 'Amazon RDS',
          optimization: 'Analyzes query performance and suggests instance scaling, read replica optimizations. Automatically scheduled database shutdowns during off-hours.',
          remediation: 'Detects DB failures, restarts instances, and switches traffic to healthy read replicas.'
        },
        {
          name: 'Amazon DynamoDB',
          optimization: 'Adjusts read/write capacity dynamically to optimize cost based on real-time usage.',
          remediation: 'Automatically switches to backup tables during failures, ensures high availability.'
        },
        {
          name: 'Amazon EBS',
          optimization: 'Identifies underutilized volumes, migrates to lower-cost storage, and schedules automated snapshots.',
          remediation: 'Recovers corrupted disk volumes, auto-replaces failed EBS volumes.'
        }
      ]
    },
    {
      title: 'Networking & Content Delivery',
      resources: [
        {
          name: 'Amazon VPC',
          optimization: 'Identifies unused IP addresses, optimizes data transfer costs across regions.',
          remediation: 'Detects and mitigates network failures, re-routes traffic automatically.'
        },
        {
          name: 'AWS CloudFront',
          optimization: 'Optimizes cache hit ratio, reduces unnecessary requests to origin servers.',
          remediation: 'Automatically updates caching rules for better performance during high demand.'
        },
        {
          name: 'Elastic Load Balancer (ELB)',
          optimization: 'Identifies over-provisioned load balancers, auto-scales based on demand.',
          remediation: 'Automatically reroutes traffic during node failures, self-heals misconfigured load balancers.'
        }
      ]
    },
    {
      title: 'Security & Compliance',
      resources: [
        {
          name: 'AWS IAM',
          optimization: 'Removes unused permissions, enforces least privilege access for cost-efficient role management.',
          remediation: 'Detects unauthorized access attempts, auto-restricts compromised accounts.'
        },
        {
          name: 'AWS WAF',
          optimization: 'Identifies redundant firewall rules, optimizes request filtering for cost savings.',
          remediation: 'Automatically blocks suspicious traffic based on AI-driven threat detection.'
        },
        {
          name: 'AWS Shield',
          optimization: 'Adjusts protection levels based on cost-effectiveness, prioritizes high-value applications.',
          remediation: 'Automatically detects and mitigates DDoS attacks in real-time.'
        },
        {
          name: 'AWS Config',
          optimization: 'Identifies non-compliant resources, suggests cost-saving policy adjustments.',
          remediation: 'Auto-corrects non-compliant configurations based on predefined security policies.'
        }
      ]
    },
    {
      title: 'Logging & Monitoring',
      resources: [
        {
          name: 'Amazon CloudWatch',
          optimization: 'Detects excessive log retention suggests retention policy optimizations for lower storage costs.',
          remediation: 'Identifies application issues based on logs, triggers automated recovery workflows.'
        },
        {
          name: 'AWS X-Ray',
          optimization: 'Reduces tracing overhead by adjusting sampling rates, optimizes cost on excessive tracing requests.',
          remediation: 'Auto-restarts failing services based on tracing analysis.'
        },
        {
          name: 'AWS CloudTrail',
          optimization: 'Detects redundant logging, recommends optimized configurations to reduce cost.',
          remediation: 'Flags security breaches, triggers automated security response workflows.'
        }
      ]
    },
    {
      title: 'Developer & DevOps Services',
      resources: [
        {
          name: 'AWS CodeBuild',
          optimization: 'Suggests cost-efficient build settings, minimizes unnecessary build executions.',
          remediation: 'Retries failed builds automatically, optimizes build configurations.'
        },
        {
          name: 'AWS CodePipeline',
          optimization: 'Optimize build and deployment frequency to reduce costs.',
          remediation: 'Detects failed deployments, auto-rollbacks to the last stable version.'
        },
        {
          name: 'AWS Step Functions',
          optimization: 'Reduces unnecessary workflow executions, optimizes parallel execution strategies.',
          remediation: 'Auto-retries failed workflows ensures fault-tolerant execution.'
        }
      ]
    },
    {
      title: 'Machine Learning & AI Services',
      resources: [
        {
          name: 'Amazon SageMaker',
          optimization: 'Optimizes ML training runs for cost efficiency, schedules lower-cost training windows.',
          remediation: 'Auto-restarts interrupted training jobs, ensures failover execution.'
        },
        {
          name: 'AWS Lambda AI',
          optimization: 'Reduces function execution costs by optimizing resource allocation.',
          remediation: 'Auto-retries failed AI inferences, ensures model reliability.'
        }
      ]
    }
  ];

  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#041322] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Intelligent Cloud Management Solution
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionize how you manage your cloud infrastructure with advanced AI and machine learning.
            </p>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            The Challenge
          </h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <ul className="space-y-4">
              {[
                'Limited visibility into cloud resources',
                'Unnecessary costs from unused infrastructure',
                'Frequent downtime from resource failures',
                'Manual and time-consuming incident response',
                'Lack of proactive resource optimization'
              ].map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-6 w-6 text-red-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-lg text-gray-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Our Solution
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AWS Resources Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              AWS Cloud Resources & Cost Optimization Strategies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cloud Pioneer integrates with a wide range of AWS cloud resources, offering automated cost optimization 
              and proactive resource management. Below is a detailed list of AWS resources and how Cloud Pioneer can 
              optimize and manage them efficiently.
            </p>
          </div>

          <div className="space-y-12">
            {sections.map((section, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-600 px-6 py-4">
                  <h3 className="text-2xl font-semibold text-white">{section.title}</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {section.resources.map((resource, resourceIdx) => (
                    <div key={resourceIdx} className="p-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">{resource.name}</h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="text-lg font-medium text-blue-600 mb-2">Cost Optimization</h5>
                          <p className="text-gray-600">{resource.optimization}</p>
                        </div>
                        <div>
                          <h5 className="text-lg font-medium text-green-600 mb-2">Automated Remediation</h5>
                          <p className="text-gray-600">{resource.remediation}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-[#041322]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-8">
            Ready to Optimize Your Cloud Infrastructure?
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#041322] bg-white hover:bg-gray-100"
          >
            Get Started
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
