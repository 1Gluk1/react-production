import {classNames} from 'shared/lib/class-names/class-names';
import cls from './Navbar.module.scss';
import {Modal} from 'shared/ui/Modal/Modal';
import {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';

type NavbarProps = {
	className?: string;
};
export const Navbar = ({className}: NavbarProps) => {
	const {t} = useTranslation();
	const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

	const onToggleModal = useCallback(() => {
		setIsAuthModalOpen(prevState => !prevState);
	}, []);

	return (<div className={classNames(cls.Navbar, {}, [className])}>
		<Button
			className={cls.links}
			theme={ButtonTheme.OUTLINE}
			onClick={onToggleModal}
		>
			{t('sign_in')}
		</Button>
		{/* <Button */}
		{/*	className={cls.links} */}
		{/*	theme={ButtonTheme.OUTLINE} */}
		{/* > */}
		{/*	{t('sign_up')} */}
		{/* </Button> */}
		<Modal
			isOpen={isAuthModalOpen}
			onClose={onToggleModal}
		>
			{'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque cupiditate dignissimos facere magni neque nobis quis quod tenetur vel.'}
		</Modal>
	</div>);
};
