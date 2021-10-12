import SelectIconInput from '../components/SelectIconInput/SelectIconInput';

export default function Test() {

    const advancedOptions = [
        {
            label: "Blue",
            value: '1',
            icon: 'https://cdn.discordapp.com/avatars/119085724220784641/1ebdb55e163cf608c058912b5e88cdaa.webp'
        },
        {
            label: "Black",
            value: '2',
            icon: 'https://cdn.discordapp.com/avatars/119085724220784641/1ebdb55e163cf608c058912b5e88cdaa.webp'
        },
        {
            label: "Red",
            value: '3',
            icon: 'https://cdn.discordapp.com/avatars/119085724220784641/1ebdb55e163cf608c058912b5e88cdaa.webp'
        },
        {
            label: "White",
            value: '4',
            icon: 'https://cdn.discordapp.com/avatars/119085724220784641/1ebdb55e163cf608c058912b5e88cdaa.webp'
        },
        {
            label: "Green",
            value: '5',
            icon: 'https://cdn.discordapp.com/avatars/119085724220784641/1ebdb55e163cf608c058912b5e88cdaa.webp'
        },
    ]

    return (
        <div className="w-full h-full">
            <div className="bg-blue-600 container mx-auto">
                <SelectIconInput
                    defaultIndex={0}
                    title='Reminder Channel'
                    description='Please select channel that you want the announcement'
                    name='reminder_channel'
                    content={advancedOptions}
                    width='full'
                    height={14}
                    placeholder='Select'
                />
            </div>

        </div>
    );
}
