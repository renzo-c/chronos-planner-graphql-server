// import { GraphQLDateTime } from "graphql-iso-date";
import bcrypt from 'bcrypt';

export default {
  // DateTime: GraphQLDateTime, //pending point to check if it is used
  Employee: {
    schedules: (parent, args, { db }, info) => {
      return parent.getSchedules();
    }
  },
  Query: {
    employees: (parent, args, { db }, info) => {
      return db.models.employee.findAll();
    },
    employee: (parent, { user }, { db }, info) => {
      // const test = db.models.employee
      //   .findByPk(user)
      //   .then(result => console.log("result", Object.keys(result.__proto__)));
      return db.models.employee.findByPk(user);
    },
    employeeLogin: (parent, { user, password }, { db }, info) => {
      return db.models.employee.findOne({ where: { user } }).then(employee => {
        if (employee && bcrypt.compareSync(password, employee.password)) {
          return employee;
        } else {
          return null;
        }
      });
    },
    employeeSchedules: (parent, { user }, { db }, info) => {
      return db.models.employee.findOne({
        where: {
          user
        }
      });
    }
  },

  Mutation: {
    createEmployee: async (parent, args, { db }, info) => {
      let { password, ...rest } = { ...args };
      const saltRounds = 10;
      const hashedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, (err, hash) => {
          if (err) {
            reject(err);
          }
          resolve(hash);
        });
      });
      const newArgs = { ...rest, password: hashedPassword };
      return db.models.employee.create(newArgs);
    },
    updateEmployee: async (parent, args, { db }, info) => {
      let { password, ...rest } = { ...args };
      const saltRounds = 10;
      const hashedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, (err, hash) => {
          if (err) {
            reject(err);
          }
          resolve(hash);
        });
      });
      const newArgs = { ...rest, password: hashedPassword };
      return db.models.employee
        .update(newArgs, {
          where: { user: newArgs.user },
          returning: true,
          plain: true
        })
        .then(test => test[1].dataValues);
    },
    deleteEmployee: (parent, args, { db }, info) => {
      return db.models.employee
        .findOne({ where: { user: args.user } })
        .then(employee => {
          db.models.employee.destroy({ where: { user: args.user } });
          return employee;
        });
    }
  }
};
