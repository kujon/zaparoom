export default function setup(context) {
    context.route('/users')
        // Gets the list of users.
        .get((req, res) => {

        })
        // Creates a new user.
        .post((req, res) => {

        });

    context.route('/users/:user_id')
        // Gets a single user.
        .get((req, res) => {

        })
        // Updates the user.
        .put((req, res) => {

        })
        // Deletes a user.
        .delete((req, res) => {

        });
}
