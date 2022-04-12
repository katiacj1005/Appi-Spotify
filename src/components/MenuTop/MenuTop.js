/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import imagen from "../../assets/img/logo.png";
import "./MenuTop.scss";

export default function MenuTop() {
    return (
    
        <div className="menuTop">
            <div className="menuTopLogo">
                <img src={imagen} className="logo" />
                 </div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={["1"]}
                        style={{ lineHeight: "64px" }}
                    >
                        <Menu.Item key="1">
                        <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                        <Link to="/albumList">Artist</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                        <Link to="/trackList">Album</Link>
                        </Menu.Item>
                    </Menu>
                    </div>
                );
};