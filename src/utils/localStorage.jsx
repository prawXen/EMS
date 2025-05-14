const Employees = [
  {
    id: 1,
    firstName: "Alice",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 2,
      completed: 1,
      newTask: 2,
      failed: 0
    },
    tasks: [
      {
        title: "Prepare Report",
        description: "Compile the weekly financial report",
        date: "2025-05-10",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Team Meeting",
        description: "Attend the team alignment meeting",
        date: "2025-05-09",
        category: "Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Client Email",
        description: "Send proposal to client",
        date: "2025-05-11",
        category: "Communication",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Bob",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 3,
      completed: 1,
      newTask: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Debug Module",
        description: "Fix bugs in authentication module",
        date: "2025-05-08",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Code Review",
        description: "Review PR #245",
        date: "2025-05-09",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write Tests",
        description: "Write unit tests for new features",
        date: "2025-05-10",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update Docs",
        description: "Update API documentation",
        date: "2025-05-11",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Charlie",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 2,
      completed: 0,
      newTask: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Design Banner",
        description: "Create design for summer sale banner",
        date: "2025-05-07",
        category: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Style Fixes",
        description: "Fix mobile UI issues",
        date: "2025-05-10",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "UX Audit",
        description: "Conduct UX feedback session",
        date: "2025-05-12",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Dana",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 3,
      completed: 2,
      newTask: 2,
      failed: 0
    },
    tasks: [
      {
        title: "Database Backup",
        description: "Schedule and verify weekly backup",
        date: "2025-05-11",
        category: "IT",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Server Patch",
        description: "Apply security patches to staging",
        date: "2025-05-09",
        category: "Security",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Network Audit",
        description: "Check internal network health",
        date: "2025-05-12",
        category: "IT",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Script Automation",
        description: "Automate log parsing scripts",
        date: "2025-05-10",
        category: "Automation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Security Scan",
        description: "Run weekly security scan",
        date: "2025-05-08",
        category: "Security",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Eve",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 3,
      completed: 0,
      newTask: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Inventory Check",
        description: "Check stock levels in warehouse",
        date: "2025-05-07",
        category: "Logistics",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Supplier Call",
        description: "Follow up with new supplier",
        date: "2025-05-09",
        category: "Procurement",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Shipment Coordination",
        description: "Schedule next shipment",
        date: "2025-05-10",
        category: "Logistics",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Document Review",
        description: "Check shipping documents",
        date: "2025-05-11",
        category: "Logistics",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  }
];


const admin = [
  {
    id: 100,
    firstName: "Jaden",
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(Employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  
  return{ employees, admin };
}