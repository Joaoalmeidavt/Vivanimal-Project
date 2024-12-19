import { Avatar } from "@nextui-org/avatar";

export default function AvatarUI({ isLogin }: { isLogin: boolean }) {
    return (
        <Avatar
            isBordered
            as="button"
            className="transition-transform w-8 h-8 shrink-0 bg-[#1d7b89]"
            color="primary"
            size="sm"
            showFallback
            src={`${isLogin ? "https://i.pravatar.cc/150?u=a042581f4e29026704d" : "https://images.unsplash.com/broken"}`}

        />
    );
}
