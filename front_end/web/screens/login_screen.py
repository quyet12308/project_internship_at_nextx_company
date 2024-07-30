import streamlit as st


# Function to display the registration form
def show_registration_form():
    st.title("Đăng Ký")
    username = st.text_input("Username:")
    password = st.text_input("Password:", type="password")
    repassword = st.text_input("Nhập lại Password:", type="password")
    email = st.text_input("Email:")

    if st.button("Submit"):
        if password != repassword:
            st.error("Passwords do not match!")
        else:
            # Process registration logic here
            st.success("Registration successful!")


# Function to display the login form
def show_login_form():
    st.title("Login")
    username = st.text_input("Username:")
    password = st.text_input("Password:", type="password")

    if st.button("Login"):
        # Process login logic here
        st.success("Login successful!")


# Main function to display the appropriate content based on user status
def main():
    st.sidebar.title("Navigation")
    user_logged_in = False  # Replace this with actual login check

    # Navigation links
    st.sidebar.write("[Home](#)")
    st.sidebar.write("[Inference](#)")
    st.sidebar.write("[History](#)")

    if user_logged_in:
        st.sidebar.write("[Logout](#)")
    else:
        st.sidebar.write("[Login](#login)")
        st.sidebar.write("[Register](#register)")

    # Display appropriate form based on the URL fragment
    if st.experimental_get_query_params().get("page") == ["register"]:
        show_registration_form()
    elif st.experimental_get_query_params().get("page") == ["login"]:
        show_login_form()
    else:
        st.title("Welcome to the AI Pest Detection for Cassava")

    # Footer information
    st.markdown("<hr>", unsafe_allow_html=True)
    st.markdown("**Mô tả dự án AI nhận diện sâu bệnh trên cây khoai mì**")
    st.markdown("Liên hệ: email@example.com | Số điện thoại: 0123456789")


if __name__ == "__main__":
    main()
