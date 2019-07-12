export default {
  Attendance: {
    employee: (parent, args, { db }, info) => {
      return db.models.employee.findByPk(parent.employeeUser);
    },
    schedule: (parent, args, { db }, info) => {
      return db.models.schedule.findByPk(parent.scheduleId);
    }
  },
  Query: {
    attendances: (parent, args, { db }, info) => {
      return db.models.attendance.findAll();
    },
    attendance: (parent, { employeeUser, scheduleId }, { db }, info) => {
      return db.models.attendance.findOne({
        where: { employeeUser, scheduleId }
      });
    }
  },
  Mutation: {
    deleteAttendance: (parent, { employeeUser, scheduleId }, { db }, info) => {
      return db.models.attendance
        .findOne({
          where: { employeeUser, scheduleId }
        })
        .then(attendance => {
          attendance.destroy();
          return attendance;
        });
    }
  }
};
