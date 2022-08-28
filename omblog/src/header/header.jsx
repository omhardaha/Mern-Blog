import React from "react";
import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <div>
                <div>
                    <h1 className="text-3xl">My Blog Website</h1>
                </div>
                <div >
                    <span className="text-lg pl-2.5 pr-2.5 pt-9">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt .{" "}
                    </span>
                </div>
            </div>
        </div>
    );
}
