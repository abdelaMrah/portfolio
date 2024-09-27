import { Avatar } from "@mui/material";
import { Ts,Csharp,Python,Sql,React,Html,Css,mui,redux,reactquery,nodejs,nestjs,aspnet,sqlserver,postgresql,
    mongodb,redis,rabbitmq,grpc,docker,kubernetes, 
    entityframework,
    websockets,
    signalR,
    ocelot,
    microservices,
    vmware,
    virtualbox,
    esxi,
    ansible,
    terraform,
    sysadmin,
    nginx,
    monolith,
    eventDriven,
    designPattern,
    network,
    routing,
    linux,
    windows,
    identity,
    virtualisation,
    architectur,
    database} from "../assets";
import { label } from "framer-motion/client";

// import kubernetes from '../assets/kubernetes.png'



export type Skill ={
    id:number;
    title:string;
    progress?:number;
    description?:string;
    techniques?:any[]| {[key:string]:any}|Skill[];
    logo?:any;
}
const logoStyle :React.CSSProperties={
    width:'50px',
    height:'50px'
}

export const skills :{[key:string]:Skill[]}= {
    language:[
        {
            id:1,
            title:'Typescript',
            progress:80,
            logo:<Avatar src={Ts} sx={logoStyle}/>
        },
        {
            id:2,
            title:'C#',
            progress:60,
            logo:<Avatar src={Csharp} sx={logoStyle} />
        },
        {
            id:3,
            title:'Python',
            progress:50,
            logo:<Avatar src={Python} sx={logoStyle} />
        },
        {
            id:4,
            title:'SQL',
            progress:60,
            logo:<Avatar src={Sql} sx={logoStyle}/>
        },
        // {
        //     id:5,
        //     title:'SQL',
        //     progress:60,
        //     logo:<Avatar src={Sql} sx={logoStyle}/>
        // },
        
    ],
    frontend:[
        {
            id:1,
            title:'reactjs',
            description:'SPA with reusable components',
            progress:70,
            logo:<Avatar src={React}  sx={logoStyle}/>
        },
        {
            id:2,
            title:'HTML',
            progress:80,
            logo:<Avatar src={Html} sx={logoStyle} />
        },
        {
            id:3,
            title:'CSS',
            progress:50,
            logo:<Avatar src={Css} sx={logoStyle}/>
        },
       {
            id:4,
            title:'Marerial UI',
            progress:70,
            logo:<Avatar src={mui} sx={logoStyle} />
        },
        {
            id:6,
            title:'State Management',
            description:'state management with Context API and useReducer hook',
            progress:80,
            logo:<Avatar src={redux} sx={logoStyle} />
        },
        {
            id:7,
            title:'React Query',
            description:`fetching API's with axios and useQuery hook`,
            progress:60,
            logo:<Avatar src={reactquery}/>
        }
    ],
    backend:[
        {
            id:1,
            title:'nodejs and express',
            description:`backend API's with express framework and typescript`,
            progress:60,
            logo:<Avatar src={nodejs}  sx={logoStyle}/>
        },
        {
            id:2,
            title:'nestjs',
            description:'high performance backend API with nestjs framework',
            // techniques:['prisma','typeorm','mongoose','websocket and socketIO' ,'microservices'],
            progress:80,
            logo:<Avatar src={nestjs} sx={logoStyle} />,
            techniques:[
                {
                    id:1,
                    label:'',
                    title:'',
                    logo:<></>
                },
                {
                    id:1,
                    label:'',
                    title:'',
                    logo:<></>
                },
                {
                    id:1,
                    label:'',
                    title:'',
                    logo:<></>
                },
                {
                    id:1,
                    label:'',
                    title:'',
                    logo:<></>
                },
            ]
        },
        {
            id:3,
            title:'ASP .NET core',
            description:`Strong and secure API's with dotnet technologie of microsoft `,
            // techniques:['EntityFrameworkCore','WebSockets','Ocelot for API Gateways'],
            techniques:[
                {
                    id:1,
                    label:'EntityFrameworkCore',
                    title:'EntityFrameworkCore',
                    logo:<Avatar  src={entityframework} style={{...logoStyle,}}/>
                },
                {
                    id:2,
                    label:'WebSockets',
                    title:'WebSockets',
                    logo:<Avatar src={websockets}  style={logoStyle}/>
                },
                {
                    id:3,
                    label:'SignalR',
                    title:'SignalR',
                    logo:<Avatar  src={signalR} style={logoStyle} />
                },
                {
                    id:5,
                    label:'Asp .net Identity',
                    title:'identity',
                    logo:<Avatar src={identity} style={logoStyle}/>
                },
                {
                    id:5,
                    label:'AOcelot',
                    title:'ocelot',
                    logo:<Avatar src={ocelot} style={logoStyle}/>
                }
            ],
            progress:70,
            logo:<Avatar src={aspnet} sx={logoStyle} />
        },
        {
             id:4,
             title:'SQL and noSQL Databases',
             logo:<Avatar src={database} style={logoStyle} />,
             progress:70,
             techniques:[
                    {
                        id:1,
                        label:'PostgreSql',
                        title:'postgres',
                        logo:<Avatar src={postgresql} sx={logoStyle}/>
                    },
                    {
                        id:2,
                        label:'Sqlserver',
                        title:'sqlserver',
                        logo:<Avatar src={sqlserver} sx={logoStyle}/>
                     },
                    {
                        id:3,
                        label:'mongodb',
                        title:'mongodb',
                        logo:<Avatar src={mongodb} sx={logoStyle}/>
                     },
                    {
                        id:4,
                        label:'redis',
                        title:'redis',
                        logo:<Avatar src={redis} sx={logoStyle}/>
                     },
             ],
        },
        {
            id:5,
            title:'Architectures Pattern',
            description:'',
            logo:<Avatar src={architectur} style={logoStyle} />,
            progress:60,
            techniques:[
                {
                    id:1,
                    label:'Microservices',
                    title:'microservices',
                    logo:<Avatar src={microservices} style={logoStyle} />,
                    techniques:[
                        {
                            id:1,
                            label:'rabbitMq',
                            title:'rabbitmq',
                            logo:<Avatar src={rabbitmq} style={logoStyle} />
                        },
                        {
                            id:2,
                            label:'Redis',
                            title:'redis',
                            logo:<Avatar src={redis} style={logoStyle} />
                        },
                        {
                            id:3,
                            label:'Grpc',
                            title:'grpc',
                            logo:<Avatar src={grpc} style={logoStyle} />
                        },
                        {
                            id:4,
                            label:'NestJs',
                            title:'nestjs',
                            logo:<Avatar src={nestjs} style={logoStyle} />
                        },
                        {
                            id:5,
                            label:'Asp .Net Core',
                            title:'aspnet',
                            logo:<Avatar src={aspnet} style={logoStyle} />
                        },
                        {
                            id:6,
                            label:'Docker',
                            title:'docker',
                            logo:<Avatar src={docker} style={logoStyle} />
                        },
                        {
                            id:7,
                            label:'Kubernetes',
                            title:'kubernetes',
                            logo:<Avatar src={kubernetes} style={logoStyle} />
                        },
                    ]
                },
                {
                    id:2,
                    label:'Monolith',
                    title:'monolith',
                    logo:<Avatar src={monolith} style={logoStyle} />,
                    techniques:[]
                },
                {
                    id:3,
                    label:'Even Driven',
                    title:'Even Driven',
                    logo:<Avatar src={eventDriven} style={logoStyle} />,
                    techniques:[]
                }
               
            ]
        },
        {
            id:6,
            // label:'Design Pattern',
            title:'Design Dattern',
            progress:60,
            logo:<Avatar src={designPattern} style={logoStyle}  />,
            // techniques:[]
        }
    ],
    devops:[
        {
            id:1,
            title:'virtualization',
            description:'',
            logo:<Avatar src={virtualisation} style={logoStyle} />,
            // techniques:['vmware workstaion','oracle virtualBox','microsoft hyperV','vmware ESXI'],
            techniques:[
                {
                    id:1,
                    label:'Vmware Workstaion',
                    title:'vmware workstaion',
                    logo:<Avatar  src={vmware} style={logoStyle}/>,
                },
                {
                    id:2,
                    label:'Oracle VirtualBox',
                    title:'oracle virtualBox',
                    logo:<Avatar  src={virtualbox} style={logoStyle} />
                },
                {
                    id:3,
                    label:'Vmware ESXI',
                    title:'vmware ESXI',
                    logo:<Avatar src={esxi} style={logoStyle} />
                }
            ]
         },
        {
            id:2,
            title:'Docker',
             description:'Dockerize Application with docker',
            logo:<Avatar  src={docker} style={logoStyle} />,
            techniques:[
                {
                    id: 1,
                    label: 'Docker Basics',
                    title: 'Basic Docker Concepts',
                 },
                {
                    id: 2,
                    label: 'Docker Networking',
                    title: 'Docker Networking',
                 },
                {
                    id: 3,
                    label: 'Data Persistence',
                    title: 'Volumes and Data Persistence',
                 },
                {
                    id: 4,
                    label: 'Docker Compose',
                    title: 'Docker Compose',
                 },
                
                // {
                //     id: 6,
                //     label: 'Docker Security',
                //     title: 'Security in Docker',
                //     description: 'Mastered: Applying best practices for container security, managing permissions, scanning images for vulnerabilities, and limiting container resource usage.'
                // },
               
              
                {
                    id: 5,
                    label: 'Docker Registry',
                    title: 'Docker Registry',
                 }
            ]
            
        },
        {
            id:3,
            title:'Kubernutes',
            description:'',
            logo:<Avatar src={kubernetes} style={logoStyle} />,
            techniques:[
                {
                    id: 1,
                    label: 'Kubernetes Basics',
                    title: 'Basic Kubernetes Concepts',
                 },
                {
                    id: 2,
                    label: 'Kubernetes Pods',
                    title: 'Working with Pods',
                 },
                {
                    id: 3,
                    label: 'Kubernetes Deployments',
                    title: 'Deployments and Scaling',
                 },
                {
                    id: 4,
                    label: 'Kubernetes Services',
                    title: 'Networking with Services',
                 },
                {
                    id: 5,
                    label: 'ConfigMaps and Secrets',
                    title: 'Configuration Management',
                 },
                {
                    id: 6,
                    label: 'Kubernetes Ingress',
                    title: 'Ingress and Load Balancing',
                 },
                {
                    id: 7,
                    label: 'StatefulSets',
                    title: 'Managing Stateful Applications',
                 },
                {
                    id: 8,
                    label: 'Persistent Storage',
                    title: 'Managing Persistent Volumes',
                 },
                {
                    id: 9,
                    label: 'Helm Charts',
                    title: 'Helm for Kubernetes',
                 },
                // {
                //     id: 10,
                //     label: 'Kubernetes Security',
                //     title: 'Security in Kubernetes',
                //  },
                {
                    id: 10,
                    label: 'Kubernetes Monitoring and Logging',
                    title: 'Monitoring and Logging',
                 },
                {
                    id: 11,
                    label: 'Kubernetes Autoscaling',
                    title: 'Autoscaling Applications',
                 }
            ]
            ,

         },
        {
            id:4,
            title:'Ansible',
            logo:<Avatar src={ansible}  style={logoStyle}/>,
            description:'',
            // techniques:[
            //     {
            //         id: 1,
            //         label: 'Ansible Basics',
            //         title: 'Basic Ansible Concepts',
            //         description: 'Mastered: Understanding the architecture of Ansible, including the control node, managed nodes, inventory, and basic commands like ansible, ansible-playbook.'
            //     },
            //     {
            //         id: 2,
            //         label: 'Playbooks',
            //         title: 'Writing Playbooks',
            //         description: 'Mastered: Writing Ansible playbooks to automate tasks, using YAML syntax, and defining tasks, handlers, and variables to manage infrastructure.'
            //     },
            //     {
            //         id: 3,
            //         label: 'Modules',
            //         title: 'Using Ansible Modules',
            //         description: 'Mastered: Working with built-in Ansible modules to manage resources like files, services, users, packages, and networking. Creating reusable roles with modules.'
            //     },
            //     {
            //         id: 4,
            //         label: 'Roles',
            //         title: 'Organizing with Roles',
            //         description: 'Mastered: Organizing playbooks into roles to reuse and share Ansible code. Understanding the directory structure and best practices for role creation.'
            //     },
            //     {
            //         id: 5,
            //         label: 'Ansible Vault',
            //         title: 'Managing Secrets with Vault',
            //         description: 'Mastered: Using Ansible Vault to encrypt sensitive data such as passwords and keys, and integrating encrypted variables in playbooks.'
            //     },
            //     {
            //         id: 6,
            //         label: 'Inventory Management',
            //         title: 'Managing Inventories',
            //         description: 'Mastered: Managing static and dynamic inventories to define groups of hosts, using host variables, group variables, and working with inventory plugins.'
            //     },
            //     {
            //         id: 7,
            //         label: 'Ansible Galaxy',
            //         title: 'Ansible Galaxy and Community Roles',
            //         description: 'Mastered: Using Ansible Galaxy to download and integrate community roles into projects, and publishing roles for reuse across teams.'
            //     },
            //     {
            //         id: 8,
            //         label: 'Jinja2 Templates',
            //         title: 'Using Jinja2 Templates',
            //         description: 'Mastered: Using Jinja2 templates to dynamically generate configuration files and scripts within playbooks, based on variables and conditions.'
            //     },
            //     {
            //         id: 9,
            //         label: 'Error Handling',
            //         title: 'Error Handling and Debugging',
            //         description: 'Mastered: Implementing error handling using failed_when, ignore_errors, and running Ansible playbooks in check mode for troubleshooting and debugging.'
            //     },
            //     {
            //         id: 10,
            //         label: 'Idempotency',
            //         title: 'Ensuring Idempotency',
            //         description: 'Mastered: Writing idempotent playbooks that can be executed multiple times without causing unintended changes, ensuring that tasks only apply changes when necessary.'
            //     },
            //     {
            //         id: 11,
            //         label: 'Ansible Tower / AWX',
            //         title: 'Managing with Ansible Tower/AWX',
            //         description: 'Mastered: Using Ansible Tower (or AWX) for enterprise-level automation management, including job scheduling, role-based access control (RBAC), and centralized logging.'
            //     },
            //     {
            //         id: 12,
            //         label: 'Ansible with Cloud Providers',
            //         title: 'Integrating Ansible with Cloud Providers',
            //         description: 'Mastered: Automating the provisioning and configuration of cloud resources (AWS, Azure, GCP) using Ansible playbooks and cloud provider modules.'
            //     }
            // ]
            
        },
        {
            id:5,
            title:'Terraform',
            logo:<Avatar src={terraform} style={logoStyle}/>
        },
        {
            id:6,
            title:'System Administration',
            logo:<Avatar src={sysadmin} style={logoStyle}/>,
            // techniques:['Linux','Windows server'']
            techniques:[
                {
                    id:1,
                    label:'Linux',
                    title:'linux',
                    description:'',
                    logo:<Avatar src={linux} style={logoStyle} />
                },
                {
                    id:2,
                    label:'Windows Server',
                    title:'windows',
                    description:'',
                    logo:<Avatar src={windows} style={logoStyle} />
                }
            ]
        },
        {
            id:7,
            title:'NGINX',
            logo:<Avatar src={nginx} style={logoStyle} />
        }

    ],
    networking:[
        {
            id:1,
            title:'network fundamentals',
            description:'',
            logo:<Avatar src={network} style={logoStyle}  />

        },
        {
            id:2,
            title:'Routing and suitching',
            description:'',
            logo:<Avatar src={routing} style={logoStyle}  />
        },

    ],
    cyberSecurity:[

    ]
}