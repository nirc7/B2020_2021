using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public static class StudentDbSQL
    {
        public static List<Student> students = new List<Student>() {
            new Student(1,"avi", 100),
            new Student(3,"ben", 99),
            new Student(2,"charlie", 97),
            new Student(4,"dora", 100),
        };


        public static List<Student> GetALLStudents()
        {
            string conStr = ConfigurationManager.ConnectionStrings["RuppinSqlServer"].ConnectionString;
            SqlConnection con = new SqlConnection(conStr);
            SqlCommand comm = new SqlCommand("SELECT * FROM TBStudents", con);
            con.Open();
            SqlDataReader reader = comm.ExecuteReader();
            List<Student> ls = null;
            if (reader.HasRows)
            {
                ls = new List<Student>();
                while (reader.Read())
                {
                    ls.Add(new Student(
                        (int)reader["ID"],
                        (string)reader["Name"],
                        (int)reader["Grade"]));
                }

            }
            con.Close();
            return ls;
        }
    }
}