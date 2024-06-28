const LoginForm = () => {
  return (
    <form
      action=""
      method="post"
      className="flex flex-col gap-8 w-full max-w-[25.625rem]"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-paragraph3">
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="w-full min-h-[2.688rem] rounded-xl border-2 border-lightGrey"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-paragraph3">
          Senha
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="w-full min-h-[2.688rem] rounded-xl border-2 border-lightGrey"
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="w-[10.313rem] h-[2.875rem] bg-primaryColor rounded-2xl text-white font-bold text-lg"
        >
          ENTRAR
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
