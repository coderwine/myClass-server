# myClass-server

-------------------------------
Application for Instructors/Teachers to create a classroom to list students and make notes.

This is specifically designed for a special case use with Eleven Fifty Academy.

_____________________________________
- I need to refactor how this project is built.  The process should be:
    - Instructors login/signup
        - Create Classroom
            - Add Students
                - Create Notes over duration of class
            - Create Starting Notes / Duration Notes

        * Instructors will haveMany Classrooms
        * Classrooms will haveMany Notes, haveMany Students.
        * Students will haveMany Notes