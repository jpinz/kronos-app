import Vue from "vue";
import Vuex from "vuex";
const arrayMove = require("array-move");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    company: "Kronos",
    role: "Manager",
    colorPrimary: {},
    colorSecondary: {},
    taskGroups: {
      Timekeeping: {
        selected: false,
        tasks: [
          {
            name: "Add Paycode",
            selected: false,
            description: "Add a paycode to an employee's timecard.",
            link:
              "https://edweb1.kronos.com/education/WFD_UA/Tools_Templates/Captured_Exercises/Published/MTO_Timekeeping_Exercise_Page/Add_Paycode_to_Timecard/index.html"
          },
          {
            name: "Add Punch",
            selected: false,
            description: "Add a missed punch to an employee's timecard.",
            link:
              "https://edweb1.kronos.com/education/WFD_UA/Tools_Templates/Captured_Exercises/Published/MTO_Timekeeping_Exercise_Page/Add_Punch_With_Comment/index.html"
          }
        ]
      },
      Scheduling: {
        selected: false,
        tasks: [
          {
            name: "Assign Open Shift",
            selected: false,
            description:
              "Assign an open shift to an employee by adding the shift to their schedule.",
            link:
              "https://edweb1.kronos.com/education/WFD_UA/Tools_Templates/Captured_Exercises/Published/MTO_Scheduling_Exercise_Page/Assign_Open_Shifts/index.html"
          },
          {
            name: "Manage Time Off",
            selected: false,
            description: "Identify, access, and respond to time-off requests.",
            link:
              "https://edweb1.kronos.com/education/WFD_UA/Tools_Templates/Captured_Exercises/Published/MTO_Scheduling_Exercise_Page/Manage_Time_off_Requests/index.html"
          },
          {
            name: "Modify Scheduled Shifts",
            selected: false,
            description: "Add, Edit, and Delete Scheduled Shifts",
            link:
              "https://edweb1.kronos.com/education/WFD_UA/Tools_Templates/Captured_Exercises/Published/MTO_Timekeeping_Exercise_Page/Add_Edit_Delete_Shifts/index.html"
          }
        ]
      },
      HR: {
        selected: false,
        tasks: [
          {
            name: "Add Paycode",
            selected: false,
            description: "Add a paycode to an employee's timecard.",
            link:
              "https://edweb1.kronos.com/education/WFD_UA/Tools_Templates/Captured_Exercises/Published/MTO_Timekeeping_Exercise_Page/Add_Paycode_to_Timecard/index.html"
          },
          {
            name: "Add Punch",
            selected: false,
            description: "Add a missed punch to an employee's timecard.",
            link:
              "https://edweb1.kronos.com/education/WFD_UA/Tools_Templates/Captured_Exercises/Published/MTO_Timekeeping_Exercise_Page/Add_Punch_With_Comment/index.html"
          }
        ]
      },
      "Cross-Suite": {
        selected: false,
        tasks: [
          {
            name: "Navigate the Home Page",
            selected: false,
            description: "Enim ipsum est minim aute quis voluptate cupidatat voluptate sit.",
            link:
              "https://edweb1.kronos.com/education/WFD_UA/Tools_Templates/Captured_Exercises/Published/MTO_Timekeeping_Exercise_Page/Navigate_Home_Page/index.html"
          },
          {
            name: "Navigate a Dataview",
            selected: false,
            description: "Non amet dolore nulla culpa velit ut ipsum minim nisi.",
            link:
              "https://edweb1.kronos.com/education/WFD_UA/Tools_Templates/Captured_Exercises/Published/MTO_Timekeeping_Exercise_Page/Navigate_Dataviews/index.html"
          },
          {
            name: "Review Alerts in the Control Center Panel",
            selected: false,
            description:
              "Eu velit fugiat irure nisi enim sunt labore ex minim est eiusmod excepteur.",
            link:
              "https://edweb1.kronos.com/education/WFD_UA/Tools_Templates/Captured_Exercises/Published/MTO_Timekeeping_Exercise_Page/Review_Alerts_in_Control_Center_Panel/index.html"
          },
          {
            name: "Review Notifications in the Control Center",
            selected: false,
            description:
              "Lorem reprehenderit qui ut eiusmod aliqua duis nisi pariatur culpa sint ea.",
            link:
              "https://edweb1.kronos.com/education/WFD_UA/Tools_Templates/Captured_Exercises/Published/MTO_Timekeeping_Exercise_Page/Review_Notifications_in_Control_Center/index.html"
          },
          {
            name: "Running Reports",
            selected: false,
            description: "Enim elit cupidatat mollit ut.",
            link:
              "https://edweb1.kronos.com/education/WFD_UA/Tools_Templates/Captured_Exercises/Published/MTO_Timekeeping_Exercise_Page/Running_Reports/index.html"
          }
        ]
      }
    }
  },
  mutations: {
    setPage: (state, n) => {
      state.pageNumber = n;
    },
    setRole: (state, r) => {
      state.role = r;
    },
    setCompany: (state, n) => {
      state.company = n;
    },
    setColorPrimary: (state, c) => {
      state.colorPrimary = c;
    },
    setColorSecondary: (state, c) => {
      state.colorSecondary = c;
    },
    setTasks: (state, payload) => {
      if (payload.taskGroup == "Timekeeping") {
        state.taskGroups.Timekeeping.tasks = payload.tasks;
      } else if (payload.taskGroup == "Scheduling") {
        state.taskGroups.Scheduling.tasks = payload.tasks;
      } else if (payload.taskGroup == "HR") {
        state.taskGroups.HR.tasks = payload.tasks;
      } else {
        console.log("Error: Unknown task group " + payload.taskGroup);
      }
    },
    selectTaskGroup: (state, payload) => {
      if (payload.name == "Timekeeping") {
        state.taskGroups.Timekeeping.selected = payload.selected;
      } else if (payload.name == "Scheduling") {
        state.taskGroups.Scheduling.selected = payload.selected;
      } else if (payload.name == "HR") {
        state.taskGroups.HR.selected = payload.selected;
      } else {
        console.log("Error: Unknown task group " + payload.name);
      }
    },
    selectGroupTasks: (state, payload) => {
      console.log(payload);
      if (payload.group == "Timekeeping") {
        state.taskGroups.Timekeeping.tasks[payload.index].selected = payload.selected;
      } else if (payload.group == "Scheduling") {
        state.taskGroups.Scheduling.tasks[payload.index].selected = payload.selected;
      } else if (payload.group == "HR") {
        state.taskGroups.HR.tasks[payload.index].selected = payload.selected;
      } else {
        console.log("Error: Unknown task " + payload.name + " for Task Group: " + payload.group);
      }
    },
    rearrangeTasks: (state, payload) => {
      let tasks = state.taskGroups[payload.group].tasks;
      state.taskGroups[payload.group].tasks = arrayMove(tasks, payload.start, payload.end);
    }
  },
  actions: {},
  modules: {}
});
