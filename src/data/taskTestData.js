export const taskTestData = [
  {
    id: 1,
    boardName: "SuperBoard",
    boardColumns: [
      {
        id: 4123,
        name: "To Do",
        limit: 10,
        tasks: [
          {
            id: "task-1",
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
        id: 12341,
        name: "In Progress",
        limit: 10,
        tasks: [
          {
            id: "task-2",
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
        id: 12412412341,
        name: "In Progress",
        limit: 10,
        tasks: [
          {
            id: "task-3",
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
        id: 12342141,
        name: "In Progress",
        limit: 10,
        tasks: [
          {
            id: "task-4",
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
];
