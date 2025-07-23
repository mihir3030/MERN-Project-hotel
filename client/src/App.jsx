import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import RoomDetail from "./pages/RoomDetail";
import MyBookings from "./pages/MyBookings";
import HotelReg from "./components/HotelReg";
import Layout from "./pages/hotelOwner/Layout";
import Dashboard from "./pages/hotelOwner/Dashboard";
import AddRoom from "./pages/hotelOwner/AddRoom";
import ListRoom from "./pages/hotelOwner/ListRoom";

function App() {
  const isOwnerPath = useLocation().pathname.includes("/owner");
    return (
        <div>
          {/* what is isWonpath - it is when admin is logged in so we don't show this navbar */}
          {!isOwnerPath && <Navbar />}
          {false && <HotelReg />}
          <div className="min-h-[70vh]"> 
           <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<AllRooms />} />
            <Route path="/rooms/:id" element={<RoomDetail />} />
            <Route path="/my-bookings" element={<MyBookings />} />

            {/* Hotel Owner Routes */}
            <Route path="/owner" element={<Layout />} >
              <Route index element={<Dashboard />} />
              <Route path="add-room" element={<AddRoom />} />
              <Route path="room-list" element={<ListRoom />} />
            </Route>


            {/* Page Not Found Route */}
            <Route path="*" element={<h1 className="text-center text-2xl font-bold mt-30">Page Not Found</h1>} />

           </Routes>
           <Footer />
          </div>
        </div>
    )
}

export default App
