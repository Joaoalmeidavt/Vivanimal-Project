import { Avatar } from "@nextui-org/avatar";

export default function AvatarUI() {
    return (
        <Avatar
            isBordered
            as="button"
            className="transition-transform w-8 h-8 shrink-0"
            color="secondary"
            name="Jason Hughes"
            size="sm"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"

        />
    );
}
