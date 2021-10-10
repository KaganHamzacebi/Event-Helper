import EventsTable from './DashboardMenuComponents/EventsTable/EventsTable';
import GuildSettings from "./DashboardMenuComponents/GuildSettings";

export default function DashboardMenu() {

    return (
        <div className="w-full">
            {/* Event Table */}
            <span className="text-3xl font-bold text-primary">Events</span>
            <div id='eventList' style={{height: '70vh'}}
                 className="bg-gray-700 bg-opacity-30 p-4 rounded-xl shadow-md my-8 mb-20">
                <EventsTable/>
            </div>
            {/* GuildSettings */}
            <GuildSettings/>
        </div>
    )
}