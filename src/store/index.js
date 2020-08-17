import Vue from "vue";
import Vuex from "vuex";
const arrayMove = require("array-move");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    role: "Manager",
    pageNumber: 0,
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
