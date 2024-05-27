const StyledCard = styled(Card)(({ theme }) => ({
    position: 'relative',
    padding: theme.spacing(2),
    borderRadius: 16,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    overflow: 'visible',
}));

const Circle = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: -10,
    right: -10,
    width: 50,
    height: 50,
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
}));

const CustomCard = ({ initials, title, content }) => {
    return (
    <StyledCard>
        <Circle>{initials}</Circle>
        <CardContent>
        <Typography variant="h5" component="div">
            {title}
        </Typography>
        <Typography variant="body2">
            {content}
        </Typography>
        </CardContent>
    </StyledCard>
    );
};
export default CustomCard;