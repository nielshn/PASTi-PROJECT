require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const courseRouter = require('./routes/courses');
const mediaRouter = require('./routes/media');
const orderPaymentsRouter = require('./routes/orderPayments');
const refreshTokensRouter = require('./routes/refreshTokens');
const mentorsRouter = require('./routes/mentors');
const chaptersRouter = require('./routes/chapters');
const lessonsRouter = require('./routes/lessons');
const imageCoursesRouter = require('./routes/imageCourses');
const myCoursesRouter = require('./routes/myCourses');
const reviewsRouter = require('./routes/reviews');
const webHookRouter = require('./routes/webhook');
const verifyToken = require('./middlewares/verifyToken');
const permission = require('./middlewares/permission');

const app = express();

app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses', courseRouter);
app.use('/media', verifyToken, permission('admin', 'student'), mediaRouter);
app.use('/orders', verifyToken, permission('admin'), orderPaymentsRouter);
app.use('/lessons', verifyToken, permission('admin', 'student'), lessonsRouter);
app.use('/refresh-tokens', refreshTokensRouter)
app.use('/mentors', verifyToken, permission('admin'), mentorsRouter);
app.use('/chapters', verifyToken, permission('admin'), chaptersRouter);
app.use('/image-courses', verifyToken, permission('admin'), imageCoursesRouter);
app.use('/my-courses', verifyToken, permission('admin', 'student'), myCoursesRouter);
app.use('/reviews', verifyToken, permission('admin', 'student'), reviewsRouter);
app.use('/webhook', webHookRouter);

module.exports = app;
