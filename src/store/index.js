import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    role: "Manager",
    pageNumber: 0,
    taskGroups: {
      Timekeeping: {
        selected: false,
        tasks: {
          // available: [
          //   {
          //     name: "Add Paycode",
          //     description: "Add a paycode to an employee's timecard.",
          //     link:
          //       "https://edweb1.kronos.com/education/WFD_UA/Tools_Templates/Captured_Exercises/Published/MTO_Timekeeping_Exercise_Page/Add_Paycode_to_Timecard/index.html"
          //   },
          //   {
          //     name: "Add Punch",
          //     description: "Add a missed punch to an employee's timecard.",
          //     link:
          //       "https://edweb1.kronos.com/education/WFD_UA/Tools_Templates/Captured_Exercises/Published/MTO_Timekeeping_Exercise_Page/Add_Punch_With_Comment/index.html"
          //   }
          // ],
          // selected: {}
          "Add Paycode": {
            selected: false,
            description: "Add a paycode to an employee's timecard.",
            link:
              "https://edweb1.kronos.com/education/WFD_UA/Tools_Templates/Captured_Exercises/Published/MTO_Timekeeping_Exercise_Page/Add_Paycode_to_Timecard/index.html"
          },
          "Add Punch": {
            selected: false,
            description: "Add a missed punch to an employee's timecard.",
            link:
              "https://edweb1.kronos.com/education/WFD_UA/Tools_Templates/Captured_Exercises/Published/MTO_Timekeeping_Exercise_Page/Add_Punch_With_Comment/index.html"
          }
        }
      },
      Scheduling: {
        selected: false,
        tasks: {}
      },
      HR: {
        selected: false,
        tasks: {}
      }
    }
    // taskGroups: [
    //   {
    //     name: "Timekeeping",
    //     selected: true,
    //     tasks: {}
    //   },
    //   {
    //     name: "Scheduling",
    //     selected: false,
    //     tasks: {}
    //   },
    //   {
    //     name: "HR",
    //     selected: false,
    //     tasks: {}
    //   }
    // ]
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
      if (payload.taskGroup == "Timekeeping") {
        state.taskGroups.Timekeeping.selected = payload.selected;
      } else if (payload.taskGroup == "Scheduling") {
        state.taskGroups.Scheduling.selected = payload.selected;
      } else if (payload.taskGroup == "HR") {
        state.taskGroups.HR.selected = payload.selected;
      } else {
        console.log("Error: Unknown task group " + payload.taskGroup);
      }
    }
  },
  actions: {},
  modules: {}
});
