const request = require('supertest')
const app = require('../server')

describe('GET /students', () => {
    it('should return list of students', (done) => {
        request(app).get('/student')
            .expect(200)
            .then((res) => {
                let students = res.body
                expect(students instanceof Array).toBeTruthy()

                let student = students[0]
                expect(student.id).toBeTruthy()
                expect(student.name).toBeTruthy()
                expect(student.faculty).toBeTruthy()
                done()
            })
    })
})

describe('POST /students', () => {
    it('should created students', (done) => {
        request(app).post('/students')
            .send({ name: 'SilentGhosT', email: 'silent@gmail.com', faculty: 'Math' })
            .expect(201)
            .then((res) => {
                let student = res.body
                expect(student).toBeTruthy()
                expect(student.id).toBeTruthy()
                expect(student.name).toEqual('SilentGhosT')
                done()

            })
    })
})