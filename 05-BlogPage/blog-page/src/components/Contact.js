import React, { Component } from 'react'
import '../assets/css/Contact.css'

class Contact extends Component {
    render() {
        return (
            <div class="form">
                <h3>Registration Form</h3>
                <form>
                    <table>
                        <tr>
                            <td><label for="ad">Name:</label></td>
                            <td><input type="text" name="ad" id="ad" /></td>
                        </tr>

                        <tr>
                            <td><label for="soyad">LastName:</label></td>
                            <td><input type="text" name="soyad" id="soyad" /></td>
                        </tr>
                        <tr>
                            <td><label for="email">E-mail:</label></td>
                            <td><input type="text" name="email" id="email" /></td>
                        </tr>
                        <tr>
                            <td><label for="sifre">Password:</label></td>
                            <td><input type="password" name="sifre" id="sifre" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" value="Save" /></td>

                        </tr>
                    </table>
                </form>
            </div>
        )
    }
}
export default Contact;