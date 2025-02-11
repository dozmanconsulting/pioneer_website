import React from 'react';

const Solutions = () => {
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
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AWS Cloud Resources & Cost Optimization Strategies
          </h1>
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
                <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {section.resources.map((resource, resourceIdx) => (
                  <div key={resourceIdx} className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{resource.name}</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-medium text-blue-600 mb-2">Cost Optimization</h4>
                        <p className="text-gray-600">{resource.optimization}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-green-600 mb-2">Automated Remediation</h4>
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
  );
};

export default Solutions;
