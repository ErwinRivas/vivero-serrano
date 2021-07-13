import React, { Component } from 'react'
import { Menubar } from 'primereact/menubar'
import { InputText } from 'primereact/inputtext';
import { withRouter } from 'react-router'
import logo from '../images/flower.jpg' 


class MenuNav extends Component {

    navegarToPage = (path) => {
        this.props.history.push(path)
    }


    render() {
        const styles = {
            textAlign:"center",
        };

        const items = [
            {
                label: 'Home',
                icon: 'pi pi-home',
                command: () => { this.navegarToPage('/vivero-serrano') },
            }, {
                label: 'SERVICIOS',
                icon: 'pi pi-book',
                command: () => { this.navegarToPage('/servicios') },
            },
            {
                label: 'NOTICIAS',
                icon: 'pi pi-bars',
                command: () => { this.navegarToPage('/noticias') },
            },
            {
                label: 'GALERIA',
                icon: 'pi pi-discord',
                command: () => { this.navegarToPage('/galeria') },
            },
            {
                label: 'CONTACTENOS',
                icon: 'pi pi-copy',
                command: () => { this.navegarToPage('/contactenos') },
            },

        ]
        const start = <img alt="logo" src={logo}
            height="40" className="p-mr-2"></img>;
        const end = <InputText placeholder="Buscar..." type="text" />;
        return (
            <div>
                <div className="card">
                    <Menubar model={items} start={start} end={end} style={styles} />
                </div>
            </div>
        )
    }
}

export default withRouter(MenuNav)