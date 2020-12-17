using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class StudentsController : ApiController
    {
        //public List<Student> Get()
        //{
        //    return StudentDbMOCK.students;
        //}

        //public Student Get(int id)
        //{
        //    return StudentDbMOCK.students.FirstOrDefault(stud=> stud.ID == id);
        //}

        public IHttpActionResult Get() //SELECT *
        {
            try
            {
                //throw new Exception();
                return Ok(StudentDbMOCK.students);
            }
            catch (Exception ex)
            {
                //return BadRequest(ex.Message);
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }
           
        public IHttpActionResult Get(int id) //SELECT * WHERE ID=id
        {
            try
            {
                Student s = StudentDbMOCK.students.FirstOrDefault(stud => stud.ID == id);
                return Ok(s);
            }
            catch (Exception ex)
            {
                //return BadRequest(ex.Message);
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        public IHttpActionResult Post([FromBody] Student value)//INSERT INTO...
        {
            try
            {
                StudentDbMOCK.students.Add(value);
                return Created(new Uri(Request.RequestUri.AbsoluteUri + value.ID), value);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        public IHttpActionResult Put(int id, [FromBody] Student value)
        {
            try
            {
                Student s = StudentDbMOCK.students.FirstOrDefault(stud => stud.ID == id);
                if (s != null)
                {
                    s.Name = value.Name;
                    s.Grade = value.Grade;
                    return Ok(s);
                }
                return Content(HttpStatusCode.NotFound,
                    $"Student with id {id} was not found to update!");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        public IHttpActionResult DELETE(int id)
        {
            try
            {
                Student s = StudentDbMOCK.students.FirstOrDefault(stud => stud.ID == id);
                if (s != null)
                {
                    StudentDbMOCK.students.Remove(s);
                    return Ok();
                }
                return Content(HttpStatusCode.NotFound,
                    $"Student with id {id} was not found to delete!");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
