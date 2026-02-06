export const taskTestData = [
  {
    id: 1,
    boardName: "SuperBoard",
    boardNotes: "This is the superboard",
    boardColumns: [
      {
        id: 1,
        name: "To Do",
        limit: 10,
        tasks: [
          {
            id: 10292003092,
            title: "Dashboard",
            content: "test card",
            priority: "LOW",
            dateCreated: "01/01/1111",
            dueDate: "02/02/1111",
            tags: [
              { id: 1, name: "test tag" },
              { id: 2, name: "second tag" },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "In Progress",
        limit: 10,
        tasks: [
          {
            id: 10859295902,
            title: "Security",
            content: "test card",
            priority: "HIGH",
            dateCreated: "01/01/1111",
            dueDate: "02/02/1111",
            tags: [{ id: 1, name: "test tag" }],
          },
        ],
      },
      {
        id: 3,
        name: "In Progress",
        limit: 10,
        tasks: [
          {
            id: 10928519903,
            title: "Security",
            content: "test card",
            priority: "HIGH",
            dateCreated: "01/01/1111",
            dueDate: "02/02/1111",
            tags: [{ id: 1, name: "test tag" }],
          },
        ],
      },
      {
        id: 4,
        name: "In Progress",
        limit: 10,
        tasks: [
          {
            id: 1009581104,
            title: "Security",
            content: "test card",
            priority: "HIGH",
            dateCreated: "01/01/1111",
            dueDate: "02/02/1111",
            tags: [{ id: 1, name: "test tag" }],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    boardName: "DesignBoard",
    boardNotes: "UI/UX design tasks",
    boardColumns: [
      {
        id: 3,
        name: "To Do",
        limit: 10,
        tasks: [
          {
            id: 2049912941923001,
            title: "Wireframes",
            content: "Create low-fidelity wireframes",
            priority: "MEDIUM",
            dateCreated: "01/15/2024",
            dueDate: "02/15/2024",
            tags: [{ id: 3, name: "design" }],
          },
        ],
      },
      {
        id: 4,
        name: "In Progress",
        limit: 10,
        tasks: [],
      },
    ],
  },
  {
    id: 3,
    boardName: "BackendBoard",
    boardNotes: "API development and database",
    boardColumns: [
      {
        id: 5,
        name: "To Do",
        limit: 10,
        tasks: [
          {
            id: 30912930401,
            title: "Database Schema",
            content: "Design database structure",
            priority: "HIGH",
            dateCreated: "01/10/2024",
            dueDate: "02/10/2024",
            tags: [
              { id: 4, name: "backend" },
              { id: 5, name: "database" },
            ],
          },
        ],
      },
      {
        id: 6,
        name: "In Progress",
        limit: 10,
        tasks: [],
      },
    ],
  },
  {
    id: 4,
    boardName: "TestingBoard",
    boardNotes: "QA and testing tasks",
    boardColumns: [
      {
        id: 7,
        name: "To Do",
        limit: 10,
        tasks: [
          {
            id: 491239940013001,
            title: "Unit Tests",
            content: "Write unit tests for auth module",
            priority: "HIGH",
            dateCreated: "01/12/2024",
            dueDate: "02/12/2024",
            tags: [{ id: 6, name: "testing" }],
          },
        ],
      },
      {
        id: 8,
        name: "In Progress",
        limit: 10,
        tasks: [],
      },
    ],
  },
  {
    id: 5,
    boardName: "DocumentationBoard",
    boardNotes: "API docs and user guides",
    boardColumns: [
      {
        id: 9,
        name: "To Do",
        limit: 10,
        tasks: [
          {
            id: 500012912401,
            title: "API Documentation",
            content: "Document REST endpoints",
            priority: "MEDIUM",
            dateCreated: "01/20/2024",
            dueDate: "02/20/2024",
            tags: [{ id: 7, name: "documentation" }],
          },
        ],
      },
      {
        id: 10,
        name: "In Progress",
        limit: 10,
        tasks: [],
      },
    ],
  },
  {
    id: 6,
    boardName: "DevOpsBoard",
    boardNotes: "Deployment and infrastructure",
    boardColumns: [
      {
        id: 11,
        name: "To Do",
        limit: 10,
        tasks: [
          {
            id: 6012412401,
            title: "CI/CD Pipeline",
            content: "Setup GitHub Actions",
            priority: "HIGH",
            dateCreated: "01/05/2024",
            dueDate: "02/05/2024",
            tags: [
              { id: 8, name: "devops" },
              { id: 9, name: "deployment" },
            ],
          },
        ],
      },
      {
        id: 12,
        name: "In Progress",
        limit: 10,
        tasks: [],
      },
    ],
  },
  {
    id: 7,
    boardName: "MobileBoard",
    boardNotes: "Mobile app development",
    boardColumns: [
      {
        id: 13,
        name: "To Do",
        limit: 10,
        tasks: [
          {
            id: 70129124801,
            title: "Push Notifications",
            content: "Implement push notification system",
            priority: "MEDIUM",
            dateCreated: "01/18/2024",
            dueDate: "02/18/2024",
            tags: [{ id: 10, name: "mobile" }],
          },
        ],
      },
      {
        id: 14,
        name: "In Progress",
        limit: 10,
        tasks: [],
      },
    ],
  },
  {
    id: 8,
    boardName: "PerformanceBoard",
    boardNotes: "Optimization and performance",
    boardColumns: [
      {
        id: 15,
        name: "To Do",
        limit: 10,
        tasks: [
          {
            id: 801239124901,
            title: "Load Testing",
            content: "Performance benchmarking",
            priority: "HIGH",
            dateCreated: "01/22/2024",
            dueDate: "02/22/2024",
            tags: [{ id: 11, name: "performance" }],
          },
        ],
      },
      {
        id: 16,
        name: "In Progress",
        limit: 10,
        tasks: [],
      },
    ],
  },
  {
    id: 9,
    boardName: "BugFixBoard",
    boardNotes: "Bug fixes and patches",
    boardColumns: [
      {
        id: 17,
        name: "To Do",
        limit: 10,
        tasks: [
          {
            id: 124912999001,
            title: "Login Form Bug",
            content: "Fix validation error message",
            priority: "HIGH",
            dateCreated: "01/25/2024",
            dueDate: "02/01/2024",
            tags: [{ id: 12, name: "bug" }],
          },
        ],
      },
      {
        id: 18,
        name: "In Progress",
        limit: 10,
        tasks: [],
      },
    ],
  },
  {
    id: 10,
    boardName: "FeatureBoard",
    boardNotes: "New feature development",
    boardColumns: [
      {
        id: 19,
        name: "To Do",
        limit: 10,
        tasks: [
          {
            id: 104124018001,
            title: "Dark Mode",
            content: "Implement dark theme toggle",
            priority: "LOW",
            dateCreated: "01/30/2024",
            dueDate: "03/15/2024",
            tags: [
              { id: 13, name: "feature" },
              { id: 14, name: "ui" },
            ],
          },
        ],
      },
      {
        id: 20,
        name: "In Progress",
        limit: 10,
        tasks: [],
      },
    ],
  },
  {
    id: 11,
    boardName: "MaintenanceBoard",
    boardNotes: "Code maintenance and refactoring",
    boardColumns: [
      {
        id: 21,
        name: "To Do",
        limit: 10,
        tasks: [
          {
            id: 11012394801,
            title: "Code Review",
            content: "Review pull requests",
            priority: "MEDIUM",
            dateCreated: "02/01/2024",
            dueDate: "02/28/2024",
            tags: [{ id: 15, name: "maintenance" }],
          },
        ],
      },
      {
        id: 22,
        name: "In Progress",
        limit: 10,
        tasks: [],
      },
    ],
  },
];
