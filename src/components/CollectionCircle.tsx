interface CollectionCircleProps {
    logo: string;
    name: string;
    destacado?: boolean;
    onClick?: () => void;
}

export default function CollectionCircle({
    logo,
    name,
    destacado = false,
    onClick
}: CollectionCircleProps) {
    const logoSizeBase = "w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24";
    const logoSizeDestacado = "w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32";
    const logoSize = destacado ? logoSizeDestacado : logoSizeBase;

    const image = (
        <img
            src={logo}
            alt={name}
            className={`${logoSize} flex-shrink-0 object-contain transition-transform hover:scale-110 drop-shadow-2xl`}
        />
    );

    if (!onClick) {
        return image;
    }

    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={`Ver productos de ${name}`}
            className="cursor-pointer"
        >
            {image}
        </button>
    );
}
