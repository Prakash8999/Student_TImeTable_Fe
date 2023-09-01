import React from 'react';
import './styles.css'
const Timetable = () => {
    return (
        <div className="timetable-container flex justify-center items-center mt-8 pb-6">
            <table className="timetable w-full border-collapse border bg-white shadow-md">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="p-2 w-1/6">Time</th>
                        <th className="p-2 w-1/6">Monday</th>
                        <th className="p-2 w-1/6">Tuesday</th>
                        <th className="p-2 w-1/6">Wednesday</th>
                        <th className="p-2 w-1/6">Thursday</th>
                        <th className="p-2 w-1/6">Friday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b">
                        <td className="p-2 w-1/6">8:00 AM</td>
                        <td className="p-2 w-1/6">MATHS-3</td>
                        <td className="p-2 w-1/6">DATA STRUT</td>
                        <td className="p-2 w-1/6">JAVA</td>
                        <td className="p-2 w-1/6">DLCA</td>
                        <td className="p-2 w-1/6">CG</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-2 w-1/6">9:00 AM</td>
                        <td className="p-2 w-1/6">DLCA</td>
                        <td className="p-2 w-1/6"></td>
                        <td className="p-2 w-1/6"></td>
                        <td className="p-2 w-1/6"></td>
                        <td className="p-2 w-1/6"></td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-2 w-1/6">10:00 AM</td>
                        <td className="p-2 w-1/6">DSGT</td>
                        <td className="p-2 w-1/6"></td>
                        <td className="p-2 w-1/6"></td>
                        <td className="p-2 w-1/6"></td>
                        <td className="p-2 w-1/6"></td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-2 w-1/6">11:00 AM</td>
                        <td className="p-2 w-1/6">B</td>
                        <td className="p-2 w-1/6">R</td>
                        <td className="p-2 w-1/6">E</td>
                        <td className="p-2 w-1/6">A</td>
                        <td className="p-2 w-1/6">K</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-2 w-1/6">11:20 AM</td>
                        <td className="p-2 w-1/6">JAVA</td>
                        <td className="p-2 w-1/6"></td>
                        <td className="p-2 w-1/6"></td>
                        <td className="p-2 w-1/6"></td>
                        <td className="p-2 w-1/6"></td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-2 w-1/6">12:20 PM</td>
                        <td className="p-2 w-1/6">CG</td>
                        <td className="p-2 w-1/6"></td>
                        <td className="p-2 w-1/6"></td>
                        <td className="p-2 w-1/6"></td>
                        <td className="p-2 w-1/6"></td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-2 w-1/6">1:20 PM</td>
                        <td className="p-2 w-1/6">B</td>
                        <td className="p-2 w-1/6"></td>
                        <td className="p-2 w-1/6"></td>
                        <td className="p-2 w-1/6"></td>
                        <td className="p-2 w-1/6">K</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-2 w-1/6">2:00 PM</td>
                        <td className="p-2 w-1/6">MINI PRO</td>
                        <td className="p-2 w-1/6"></td>
                        <td className="p-2 w-1/6"></td>
                        <td className="p-2 w-1/6"></td>
                        <td className="p-2 w-1/6">CG</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-2 w-1/6">3:00 PM</td>
                        <td className="p-2 w-1/6">DATA STRUT</td>
                        <td className="p-2 w-1/6"></td>
                        <td className="p-2 w-1/6"></td>
                        <td className="p-2 w-1/6"></td>
                        <td className="p-2 w-1/6">CG</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-2 w-1/6">4:00 PM</td>
                        <td className="p-2 w-1/6">CRICKET</td>
                        <td className="p-2 w-1/6"></td>
                        <td className="p-2 w-1/6"></td>
                        <td className="p-2 w-1/6"></td>
                        <td className="p-2 w-1/6">CG</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Timetable;
